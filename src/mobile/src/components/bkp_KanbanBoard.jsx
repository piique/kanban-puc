import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Card 1' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1'],
        },
    },
    columnOrder: ['column-1'],
};

const KanbanBoard = () => {
    const [data, setData] = useState(initialData);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = data.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newData = {
            ...data,
            columns: {
                ...data.columns,
                [newColumn.id]: newColumn,
            },
        };

        setData(newData);
    };

    const addNewCard = () => {
        const newTaskId = `task-${Date.now()}`;
        const newTask = { id: newTaskId, content: `Card ${Object.keys(data.tasks).length + 1}` };

        const column = data.columns['column-1'];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.push(newTaskId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newData = {
            ...data,
            tasks: {
                ...data.tasks,
                [newTaskId]: newTask,
            },
            columns: {
                ...data.columns,
                [newColumn.id]: newColumn,
            },
        };

        setData(newData);
    };

    return (
        <div>
            <button onClick={addNewCard}>Adicionar Card</button>
            <DragDropContext onDragEnd={onDragEnd}>
                {data.columnOrder.map((columnId) => {
                    const column = data.columns[columnId];
                    const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

                    return (
                        <div key={column.id}>
                            <h3>{column.title}</h3>
                            <Droppable droppableId={column.id}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {tasks.map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {task.content}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
};
export default KanbanBoard;