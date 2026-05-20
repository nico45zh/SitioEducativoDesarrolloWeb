# 📚 SitioEducativoDesarrolloWeb

## 🌐 Plataforma Educativa – Programación IV

Este proyecto consiste en el desarrollo de una plataforma web educativa creada como parte del curso de **Programación IV – EIF209** de la Universidad Nacional de Costa Rica.

La aplicación funciona como un repositorio interactivo de contenidos relacionados con el desarrollo web moderno, integrando teoría, ejemplos prácticos, cuestionarios y dinámicas interactivas para reforzar el aprendizaje de los estudiantes.

---

# 🎯 Objetivo del Proyecto

Aplicar conocimientos de desarrollo frontend y backend mediante la construcción de un sitio web funcional, organizado y responsive, utilizando tecnologías modernas como:

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Spring Boot
- Thymeleaf

El proyecto busca servir como apoyo educativo para comprender conceptos fundamentales del desarrollo web.

---

# 🛠️ Tecnologías Utilizadas

## Frontend
- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- JavaScript

## Backend
- Java Spring Boot
- Thymeleaf
- Maven

## Herramientas
- IntelliJ IDEA
- Git y GitHub
- Navegador Web

---

# 📂 Estructura del Proyecto

```text
SitioEducativoDesarrolloWeb/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com.una.sitioeducativodesarrolloweb/
│       │       ├── Controller/
│       │       │   └── ControllerPage.java
│       │       │
│       │       ├── ServletInitializer.java
│       │       └── SitioEducativoDesarrolloWebApplication.java
│       │
│       └── resources/
│           ├── static/
│           │   ├── css/
│           │   │   └── Styles.css
│           │   │
│           │   ├── js/
│           │   │   ├── Inicio.js
│           │   │   ├── Acercade.js
│           │   │   ├── Cuestionarios.js
│           │   │   └── Juego.js
│           │   │
│           │   ├── img/
│           │   │   └── logo.png
│           │   │
│           │   └── data/
│           │       ├── html.json
│           │       ├── css.json
│           │       ├── javascript.json
│           │       ├── internet.json
│           │       ├── backend.json
│           │       ├── htmlQuiz.json
│           │       ├── cssQuiz.json
│           │       ├── javascriptQuiz.json
│           │       ├── internetQuiz.json
│           │       └── backendQuiz.json
│           │
│           └── templates/
│               ├── Inicio.html
│               ├── Temas.html
│               ├── Cuestionarios.html
│               ├── Juego.html
│               ├── Acercade.html
│               │
│               └── Elementos/
│                   ├── NavBar.html
│                   └── Footer.html
│
└── pom.xml
```

---

# 📖 Contenido del Sitio

## 🌐 1. Fundamentos de Internet y la Web

Incluye conceptos básicos necesarios para comprender el funcionamiento de Internet y la comunicación web.

### Temas:
- Internet vs Web
- Modelo OSI
- HTTP y HTTPS
- DNS
- Direcciones IP
- Métodos HTTP
- Códigos de estado
- Arquitectura Cliente-Servidor

---

## 🧱 2. HTML

Explica la estructura básica de las páginas web y las principales etiquetas utilizadas en HTML5.

### Temas:
- Estructura de un documento HTML
- Etiquetas principales
- Formularios
- Tablas
- Multimedia
- Etiquetas semánticas
- Inputs y validaciones

---

## 🎨 3. CSS

Introduce conceptos de diseño y estilos para páginas web modernas.

### Temas:
- Selectores
- Colores y tipografía
- Modelo de caja
- Flexbox
- Grid
- Responsive Design
- Animaciones y efectos visuales

---

## ⚡ 4. JavaScript

Se presentan conceptos básicos de programación para agregar interactividad al sitio.

### Temas:
- Variables
- Funciones
- Eventos
- DOM
- Condicionales
- Ciclos
- Manipulación dinámica del contenido

---

## ⚙️ 5. Spring Boot y Backend

Introducción al desarrollo backend utilizando Spring Boot.

### Temas:
- Arquitectura cliente-servidor
- Controladores
- Rutas
- Thymeleaf
- MVC
- Inyección de dependencias
- JSON
- Manejo de peticiones HTTP

---

# 🧩 Funcionalidades del Sitio

## 📚 Sistema de Temas
- Navegación lateral interactiva
- Carga dinámica de contenido desde archivos JSON
- Visualización organizada de conceptos y ejemplos

---

## 📝 Cuestionarios Interactivos
Cada tema incluye:
- 5 preguntas básicas
- Opciones múltiples
- Calificación automática
- Retroalimentación visual

Los cuestionarios son cargados dinámicamente desde archivos JSON.

---

## 🎮 Juego Interactivo
El proyecto incluye un minijuego educativo desarrollado con JavaScript.

### Características:
- Movimiento con teclado
- Sistema de vidas
- Obstáculos y enemigos
- Recolección de puntos
- Condición de victoria y derrota
- Tablero dinámico

---

## 🎨 Diseño Responsive
El sitio fue diseñado utilizando Bootstrap 5 para adaptarse correctamente a:
- Computadoras
- Tablets
- Dispositivos móviles

---

# ▶️ Cómo Ejecutar el Proyecto

## Requisitos
- Java 17+
- Maven
- IntelliJ IDEA (recomendado)

---

## Pasos

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/repositorio.git
```

---

### 2. Abrir el proyecto

Abrir la carpeta del proyecto en IntelliJ IDEA.

---

### 3. Ejecutar Spring Boot

Ejecutar la clase:

```text
SitioEducativoDesarrolloWebApplication.java
```

---

### 4. Abrir en el navegador

```text
http://localhost:8080
```

---

# 📊 Características Técnicas

- Arquitectura MVC
- Carga dinámica de contenido JSON
- Componentes reutilizables con Thymeleaf
- Estilos personalizados con Bootstrap
- Organización modular de archivos
- Diseño responsive
- Interactividad con JavaScript

---

# 📌 Posibles Mejoras Futuras

- Sistema de usuarios
- Base de datos
- Login y autenticación
- Guardado de puntuaciones
- Más minijuegos educativos
- Panel administrativo
- Estadísticas de aprendizaje

---

# 👨‍💻 Autor

**Nicolas Zárate Hernández**  
Ingeniería en Sistemas de Información  
Universidad Nacional de Costa Rica

Curso:
**Programación IV – EIF209**

Docente:
**Steven Brenes Chavarría**

---

# 📄 Licencia

Proyecto desarrollado con fines educativos y académicos.

---

# 🚀 Estado del Proyecto

✅ En desarrollo activo  
✅ Actualización progresiva conforme avanza el curso
