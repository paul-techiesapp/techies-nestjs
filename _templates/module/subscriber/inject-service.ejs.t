---
inject: true
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.module.ts
skip_if: "<%= Name %>Subscriber,"
after: "// INJECT SERVICES"
---
<%= Name %>Subscriber,