# sequelize-multipledb-config

Configures sequelize connections to multiple databases.

## How to import and use database models:
```javascript
const { exampleDb1 } = require('/configs/sequelize');
[...]
const examples1 = await exampleDb1.models.example1.findAll();
const examples2 = await exampleDb1.models.example2.findAll();
```
