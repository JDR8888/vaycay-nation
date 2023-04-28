## theme
- B/W toggleable from nav. everything will be black or white except accent color (something earthy since it's an NPS-based/outdoorsy site). toggling will flip all black and white but leave accent color the same. 


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