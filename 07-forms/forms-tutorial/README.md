# forms

```html
<form>
  <input type="email" name="email" />
  <!-- <input type="credit-card" /> -->
  <button type="submit"> submit form </button>
</form>
```

## @angular/forms

## login

## Reactive Forms

choose this and not template driven forms

## structure of the form

- group - address, credit card, dogs, table
  - group - address
    - input - city
    - input address
  - group - credit card
    - input number
    - input cvv
  - group - dogs
    - array
      - input - dog name
  - group table
    - array
      - input name
      - input tag
      
```
{
  address: {
    city: '',
    address: ''
  }, 
  table: [
    { name: '', tag: '' }
  ]
}
```
      
## login

- group
  - input - email
  - input - password


## JWT authentication
          email,pass
login ---------------> Server
          JWT
login <--------------- Server

```
Authorization: Bearer <token>
```

