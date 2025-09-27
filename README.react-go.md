## React (Vite) + Go (Chi) Setup

### Dev

```bash
npm i --prefix frontend
cd server && go mod tidy && cd -
node -e "const fs=require('fs');const a=require('./package.frontend-backend.json');const p=require('./package.json');p.scripts={...p.scripts,...a.scripts};p.devDependencies={...p.devDependencies,...a.devDependencies};fs.writeFileSync('package.json',JSON.stringify(p,null,2))"
npm i

npm run dev
```

### Frontend

- React 19 + Vite + TS
- TailwindCSS + shadcn/ui primitives

### Backend

- Go 1.24 + chi + cors
- `GET /api/health` returns `{ "status": "ok" }`

