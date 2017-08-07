# spare

> spare wheel & settings `extend(true, extend(true, {}, defaultSettings), userSettings)`

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


## set

### Object

```js
var defaultValue = {
    name: 'nimo',
    age: 24,
    child: {
        'xxx': {
            age: 0,
            name: 'xxx'
        }
    }
}
```

```js
spare.set(
    defaultValue
    ,
    {
        name: 'tim'
    }
)
/* - result
{
    name: 'tim',
    age: 24,
    child: {
        'xxx': {
            age: 0,
            name: 'xxx'
        }
    }
}
*/
```

```js
spare.set(
    defaultValue
    ,
    {
        child: {
            xxx: {
                age: 1
            }
        }
    }
)
/* - result
{
    name: 'nimo',
    age: 24,
    child: {
        'xxx': {
            age: 1,
            name: 'xxx'
        }
    }
}
*/
```

### Array

```js
spare.set(
    [1],
    [2,3]
)
// [2,3]
```

```js
spare.set(
    [1],
    []
)
// [1]
```

```js
spare.set(
    [1, [2]],
    [undefined,[3]]
)
// [1,[3]]
```

```js
spare.set(
    [1, [2,10]],
    [undefined,[3,4,5]]
)
// [1,[3,4,5]]
```
