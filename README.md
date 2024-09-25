
## Proyecto Next.js con Docker

Requisitos: 
- Docker
- Docker Compose

Variables de entorno:
- `PORT` (default: 3000)
- `NODE_ENV` (production)

Para correr el proyecto:
```bash
docker-compose up --build -d
```

Para detener el proyecto:
```bash
docker-compose down
```

Para ver los logs:
```bash
docker-compose logs -f
```

