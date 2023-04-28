
## NPS API
- parks by name
- parks by state


## pages
- Home
- Profile (if logged in)
- search page


## models
```
    User model
    (userSchema)
    - name
    - username
    - email
    - password
    - wishlist: [park: {
        - id
        - name
        - state
    }]
    - trips: {
        upcoming: []
        past: []
    }
```