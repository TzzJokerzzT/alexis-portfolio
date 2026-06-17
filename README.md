# Alexis Buelvas — Portfolio

Portfolio personal como Frontend Developer. Single Page Application que muestra experiencia profesional, proyectos, habilidades, servicios y datos de contacto, consumiendo datos dinámicos desde una API REST propia.

## 🧠 Descripción

El sitio funciona como una _landing page_ de una sola página con navegación por secciones (scroll spy), animaciones fluidas y datos obtenidos en tiempo real desde un backend dedicado. Cada sección del home —Hero, About, Experience, Gallery, Services, Testimonials, Contact— se alimenta de endpoints independientes gestionados con **React Query**, lo que permite modificar el contenido sin redesplegar el frontend.

Incluye también una página de documentación (`/docs`) para la librería pública de componentes [`@lzzjokerzzl/react-ui-components`](https://www.npmjs.com/package/@lzzjokerzzl/react-ui-components).

## 🛠️ Tecnologías

| Capa                 | Herramienta                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Runtime**          | [Bun](https://bun.sh)                                                                                |
| **Build**            | [Vite 8](https://vite.dev)                                                                           |
| **UI**               | [React 19](https://react.dev) + TypeScript                                                           |
| **Estilos**          | [Tailwind CSS 4](https://tailwindcss.com)                                                            |
| **Ruteo**            | [React Router 7](https://reactrouter.com)                                                            |
| **Animaciones**      | [Motion](https://motion.dev) (Framer Motion)                                                         |
| **Datos remotos**    | [TanStack React Query 5](https://tanstack.com/query)                                                 |
| **HTTP**             | [Axios](https://axios-http.com)                                                                      |
| **Íconos**           | [Lucide React](https://lucide.dev)                                                                   |
| **Librería propia**  | [`@lzzjokerzzl/react-ui-components`](https://www.npmjs.com/package/@lzzjokerzzl/react-ui-components) |
| **Linting**          | ESLint + Prettier                                                                                    |
| **Compilador React** | babel-plugin-react-compiler (React Compiler)                                                         |

## 🏗️ Arquitectura

El proyecto sigue una arquitectura **modular por feature** con separación clara de responsabilidades, inspirada en principios de Clean Architecture y Feature-Sliced Design adaptados al frontend.

```
src/
├── features/          # Módulos de dominio (home, ...)
│   └── home/
│       ├── sections/  # Componentes de cada sección del landing
│       └── utils/     # Constantes, helpers y tipos locales
├── pages/             # Páginas de alto nivel (entry points de rutas)
├── view/              # Vistas compuestas que orquestan secciones
├── layout/            # Layout global (Header, Footer, ScrollUp, Preloader)
├── shared/            # Capa transversal reutilizable
│   ├── api/           # Cliente HTTP, tipos, servicios y hooks de React Query
│   ├── components/    # Componentes genéricos (UI kit, ProjectCard, ExperienceCard)
│   ├── hooks/         # Hooks compartidos (useRandomQuote)
│   ├── data/          # Datos estáticos residuales (socialLinks)
│   └── utils/         # Utilidades (imageUrl)
├── routes/            # Configuración de rutas (React Router)
├── App.tsx            # Punto de entrada de la aplicación
└── main.tsx           # Bootstrap: QueryClientProvider + BrowserRouter
```

### Flujo de datos

```
[API REST] ←─ axios ── [api/services] ←─ React Query ── [api/hooks] ──→ [Sections]
```

1. **`apiClient.ts`**: instancia de Axios con `baseURL` configurable por variable de entorno (`VITE_API_URL`).
2. **`services/`**: funciones puras que llaman a cada endpoint del backend.
3. **`hooks/`**: wrappers de React Query (`useQuery`) con estrategia de caché y stale time definidos por dominio.
4. **`sections/`**: componentes de presentación que consumen los hooks y renderizan los datos, delegando la lógica de carga y error a React Query.

### Decisiones de diseño

- **Separación API ↔ UI**: los hooks de datos no conocen detalles de presentación; los componentes de sección no conocen detalles de HTTP.
- **Componentes extraídos**: `ExperienceCard` y `ProjectCard` se movieron a `shared/components/` para ser reutilizables fuera de sus secciones originales.
- **CORS en desarrollo**: Vite proxy (`/api` → `localhost:3001`) para evitar problemas de CORS en local.
- **React Compiler**: activado para optimizar re-renders sin `useMemo`/`useCallback` manuales.

## 🚀 Desarrollo local

```bash
# Instalar dependencias
bun install

# Levantar servidor de desarrollo
bun dev

# Build de producción
bun run build

# Lint y formato
bun lint
bun format
```

### Variables de entorno

| Variable       | Descripción          | Default local           |
| -------------- | -------------------- | ----------------------- |
| `VITE_API_URL` | URL base del backend | `http://localhost:3001` |

## 📦 Deploy

El frontend está desplegado en [Vercel](https://vercel.com). La variable `VITE_API_URL` debe configurarse en el dashboard de Vercel apuntando a la URL del backend en producción.
