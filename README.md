# spare

> spare wheel

`typeof value === 'undefined'? 'defaultValue': value` syntactic sugar

`spare(obj, defaultValue)`

```js
var spare = require('sparejs')
spare(self, 'state.form.user', '')
// or
spare(self.state.form.user, '')
// equal
return typeof self.state.form.user === 'undefined'? self.state.form.user: ''
```

```js
spare(self.state.form.user, 'some')
// equal
return typeof self.state.form.user === 'undefined'? self.state.form.user: 'some'
```

```js
spare(self.state.form.user, [])
// equal
return typeof self.state.form.user === 'undefined'? self.state.form.user: []
```

```js
spare(self.state.form, 'user.name', '')
// equal
var data = self.state.form
data['user'] = data['user'] || {}
return typeof data['user']['name'] === 'undefined'? data['user']['name']: ''
```

```js
var arr = []
spare(arr, 2, '')
// equal
typeof typeof attr[2] === 'undefined'?'': attr[2]
```
