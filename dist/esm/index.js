import { registerPlugin } from '@capacitor/core';
const Barkoder = registerPlugin('Barkoder', {
    web: () => import('./web').then(m => new m.BarkoderWeb()),
});
export * from './definitions';
export { Barkoder };
//# sourceMappingURL=index.js.map