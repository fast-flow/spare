# spare

> spare wheel

set default value syntactic sugar

`spare(data, attr?, defaultValue)`

## install

```shell
npm install sparejs
```

```html
<!-- Script tag -->
<script src="https://pkgzip.com/?sparejs" ></script> <script>var spare = window.pkgzip.sparejs</script>
```

## Example

```js
spare(user, 'nimo')
// equal
typeof user === 'undefined'? 'nimo': user

spare(undefined, 'some')
// "some"

spare('nimo', 'some')
// "nimo"

var list
spare(list, ['1'])
// ['1']
```

```js
var self = {
    state: {
        form: {
            nickname: 'Nico'
        }
    }
}
spare(self.state.form, 'user.name', 'defaultValue')
// "defaultValue"

spare(self.state.form, 'nickname', 'defaultValue')
// "Nico"
```
