# Proyecto: API de Joyas

Este proyecto es una API que permite la consulta y gestión de un inventario de joyas. Implementa rutas para obtener joyas y filtrarlas, además de un middleware para generar reportes sobre las rutas consultadas.

## Tecnologías utilizadas
- Node.js
- Express.js
- PostgreSQL (para consultas a la base de datos)
- Cors
- pg y pg-format

---


## Endpoints

### 1. Obtener joyas
- **Ruta:** `/joyas`
- **Método:** `GET`
- **Query Params:**
  - `limit`: Número de joyas a mostrar por página (por defecto: 3).
  - `page`: Número de página (por defecto: 2).
  - `order_by`: Campo y dirección de ordenación, por ejemplo: `stock_ASC`.
- **Ejemplo de consulta:**
  ```
  GET /joyas?limits=3&page=2&order_by=stock_ASC
  ```
- **Respuesta exitosa (200):**
  ```json
    {
    "total": 3,
    "results": [
        {
        "nombre": "Anillo Wish",
        "href": "/joyas/5"
        },
        {
        "nombre": "Collar History",
        "href": "/joyas/2"
        },
        {
        "nombre": "Aros Berry",
        "href": "/joyas/3"
        }
    ]
    }
  ```
- **Error (500):**
  ```json
  {
    "error": "Error obteniendo las joyas"
  }
  ```

### 2. Filtrar joyas
- **Ruta:** `/joyas/filtros`
- **Método:** `GET`
- **Query Params:**
  - Dependen de los campos disponibles en la base de datos.
- **Ejemplo de consulta:**
  ```
  GET /joyas/filtros?precio_min=25000&precio_max=30000&categoria=aros&metal=plata
  ```
- **Respuesta exitosa (200):**
  ```json
  [{
    "id": 5,
    "nombre": "Anillo Wish",
    "categoria": "aros",
    "metal": "plata",
    "stock": 4
    
  }]
  ```
- **Error (500):**
  ```json
  {
    "error": "Error obteniendo las joyas con filtros"
  }
  ```

---

## Middleware: Generar reportes
Este middleware genera un registro cada vez que se consulta una ruta de la API. Los registros se guardan en un archivo `reportes.log` en la raíz del proyecto.

- **Ejemplo de registro en `reportes.log`:**
  ```
  [2024-12-27T10:30:00.000Z] Ruta consultada: GET /joyas
  [2024-12-27T10:31:00.000Z] Ruta consultada: GET /joyas/filtros?color=oro
  ```

---

## Estructura del proyecto
```
├── index.js          # Archivo principal del servidor
├── consultas.js      # Funciones para interactuar con la base de datos
├── reportes.log      # Archivo generado por el middleware de reportes
├── .gitignore        # Ignora node_modules y otros archivos sensibles
├── package.json      # Configuración del proyecto y dependencias
└── README.md         # Documentación del proyecto
```

