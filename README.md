# TaskList Component

## Descripción

Este componente permite visualizar y gestionar una lista de tareas, incluyendo la funcionalidad para marcar tareas como completadas y eliminarlas. Se integra con el sistema de gestión de tareas existente y proporciona persistencia de datos mediante localStorage.

## Características

- 📋 Visualización de lista de tareas
- ✅ Marcado de tareas como completadas
- 🗑️ Eliminación de tareas
- 💾 Persistencia en localStorage
- 🎨 Diseño responsivo y amigable

## Estructura de archivos

```
src/components/
├── TaskList/
│   ├── index.jsx        # Componente principal
│   └── style.css        # Estilos específicos
├── TaskItem/
│   ├── index.jsx        # ⚠️ Componente temporal para cada tarea individual
│   └── style.css        # Estilos para las tareas individuales
```

## Uso

El componente se utiliza dentro de `App.jsx` y no requiere props para funcionar:

```jsx
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <div className="container_card">
        <h1 className="title">React Task-list ✅</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}
```

## Implementación

El componente TaskList maneja internamente:

1. El estado de las tareas con `useState`
2. La persistencia de datos con `useEffect` y localStorage
3. Las operaciones para marcar tareas como completadas y eliminarlas

## Notas sobre esta implementación

### ⚠️ Componente TaskItem Provisional
El componente TaskItem incluido en esta rama es **provisional** y está destinado únicamente a demostrar la funcionalidad del componente TaskList. Este componente debería ser reemplazado por la implementación oficial que desarrollará otro miembro del equipo.

Características del TaskItem provisional:
- Muestra el título de la tarea
- Permite marcar la tarea como completada/incompleta
- Permite eliminar la tarea

Cuando otro compañero desarrolle el componente TaskItem oficial, este archivo debería ser reemplazado, manteniendo las props y la estructura básica para mantener la compatibilidad con TaskList.

## Mejoras futuras

- Integración con un sistema de gestión de estado global
- Filtrado de tareas (completadas/pendientes)
- Edición de tareas existentes
- Categorización de tareas

## Autor

GIANFRANCO PEDRAZZANI - [GitHub](https://github.com/GianPedr)

---

> Este componente fue desarrollado como parte del TP3 para la materia Programación en Visual en la Universidad UNJu.

---
