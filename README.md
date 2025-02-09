# 🎬 Movie Service API

A movie service built with NestJS, implementing Clean Architecture principles for maintainable and scalable code.


## 🚀 Features

- Clean Architecture implementation
- TMDB API integration
- Type-safe development with TypeScript
- Dependency Injection pattern
- Scalable module structure

## 🛠 Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Architecture**: Clean Architecture
- **API Integration**: TMDB API
- **Configuration**: ConfigModule

## 🏃‍♂️ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/rattanun00000/Backen_For_Nextflix_Clone.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```env
TMDB_API_KEY=your_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3
```

4. Run the development server:
```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## 🔌 API Endpoints

- `GET /`: Welcome page
- `GET /docs`: WAPI Documentation (Swagger UI)
- `GET /movies/popular`: Get popular movies
  - Query Parameters:
    - `page` (optional): Page number (default: 1)
    - `language` (optional): Language code (default: 'en-US')

## 🏛 Architecture

This project follows Clean Architecture principles with the following layers:

### 🎯 Domain Layer (`domain/`)
- Business entities
- Repository interfaces
- Core business rules

### 💼 Application Layer (`application/`)
- Use cases
- DTOs
- Service interfaces
- Object mappers

### 🔧 Infrastructure Layer (`infrastructure/`)
- HTTP Controllers
- External API adapters
- Interface implementations

## 🔐 Environment Variables

Required environment variables:

- `TMDB_API_KEY`: Your TMDB API key
- `TMDB_BASE_URL`: TMDB API base URL

## 📝 Development Guidelines

1. Follow Clean Architecture principles
2. Use TypeScript for type safety
3. Implement new features in their respective layers
4. Maintain separation of concerns
5. Write unit tests for business logic

## 🧪 Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## 🚀 Deployment

Build for production:

```bash
npm run build
```