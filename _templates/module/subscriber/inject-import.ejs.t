---
inject: true
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.module.ts
after: "// INJECT IMPORTS"
---
import { <%= Name %>Subscriber } from './<%= h.changeCase.kebabCase(name) %>.subscriber';
