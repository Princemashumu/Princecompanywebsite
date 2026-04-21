export const blogPosts = [
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization: 7 Techniques I Use Daily',
    excerpt:
      'From memoization to code-splitting, here are the practical optimization patterns that have made the biggest difference in my production apps.',
    date: '2026-04-10',
    readTime: '8 min read',
    tags: ['React', 'Performance', 'JavaScript'],
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    content: `
## Introduction

Performance optimization in React is more than just adding \`React.memo\` everywhere. It requires understanding when components re-render and why.

## 1. Memoize Expensive Computations with useMemo

\`\`\`js
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.value - b.value);
}, [items]);
\`\`\`

## 2. Stabilize Callbacks with useCallback

Prevent child re-renders by stabilizing function references passed as props.

## 3. Code Splitting with React.lazy

Split large routes and load them only when needed to reduce initial bundle size.

## 4. Virtualize Long Lists

Use \`react-window\` or \`@tanstack/virtual\` for lists with thousands of items.

## 5. Avoid Prop Drilling with Context + useReducer

Overusing context for frequently-changing values can cause unnecessary renders. Scope your context carefully.

## 6. Batch State Updates

In React 18, state updates are automatically batched even in async code — leverage this.

## 7. Profile Before Optimizing

Always use React DevTools Profiler to find actual bottlenecks before applying fixes.

## Conclusion

Performance is a feature. Measure first, optimize second, and always test on real devices.
    `,
  },
  {
    slug: 'building-scalable-node-apis',
    title: 'Building Scalable Node.js APIs: Patterns That Actually Work',
    excerpt:
      'After shipping REST APIs to 50k+ users, here are the architecture patterns, middleware strategies, and database tricks I rely on.',
    date: '2026-03-25',
    readTime: '12 min read',
    tags: ['Node.js', 'Backend', 'Architecture'],
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    content: `
## The Problem with "Getting It Working"

Many APIs that "just work" in development fall apart under real traffic. Here's how to build for scale from day one.

## Layered Architecture

Separate concerns into controllers, services, and repositories. Controllers handle HTTP, services contain business logic, repositories handle data access.

## Input Validation at the Boundary

Always validate and sanitize input at the HTTP layer using libraries like Zod or Joi before it reaches your business logic.

## Database Query Optimization

- Use indexes on columns you filter/sort on frequently
- Paginate all list endpoints
- Use connection pooling (pg-pool, Mongoose connection options)

## Caching Strategies

- Cache frequently-read, rarely-changed data in Redis
- Use HTTP caching headers for public resources
- Implement cache invalidation on write

## Error Handling Middleware

Centralize error handling with a global Express error middleware to avoid scattered try/catch blocks.

## Conclusion

Scalability is built in, not bolted on. Start with clean architecture, validate early, and optimize with data.
    `,
  },
  {
    slug: 'css-grid-mastery',
    title: 'CSS Grid Mastery: Layouts I Used to Reach for Flex For',
    excerpt:
      "CSS Grid is more powerful than most developers use it. Here's how I've replaced complex flexbox hacks with elegant grid solutions.",
    date: '2026-03-01',
    readTime: '6 min read',
    tags: ['CSS', 'Frontend', 'Design'],
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    content: `
## Grid vs Flexbox

Flexbox is one-dimensional. Grid is two-dimensional. Use Grid when you're thinking in rows AND columns simultaneously.

## The Holy Grail Layout in 5 Lines

\`\`\`css
.layout {
  display: grid;
  grid-template: auto 1fr auto / 200px 1fr;
}
\`\`\`

## Named Template Areas

Grid template areas make layouts readable at a glance and easy to reorganize with media queries.

## auto-fill vs auto-fit

\`auto-fill\` creates empty tracks while \`auto-fit\` collapses them — crucial difference for responsive card grids.

## Conclusion

CSS Grid is the most powerful layout tool in the browser. Invest time learning it properly and your layouts will be cleaner, more robust, and easier to maintain.
    `,
  },
];
