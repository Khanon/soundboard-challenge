# soundboard-challenge
Sounboard with client and server side

## How to test
Run both Docker containers for **soundboard** and **server**, no matter the order.

Once both containers are running, *Web Client* should retrieve sounds content from *server*.

Test server requests using you prefer API platform (E.g: Postman).

On **POST** Request **'/sounds'**, the *server* stores the new sounds data and it will notify to the *Web Client* there's new sounds data through WebSocket. At this point *Web Client* will ask to the user to reload the content.

On **sound play**, server gets notified through **PUT** Request **/sounds/10/play** and will send back the new sound's price.

### NOTES
<ul>
<li>Many of the HTML schemas can be simplified using angular templates</li>
<li>Error responses should be controlled</li>
<li>Interceptors and guards should be implemented on server side to improve the security</li>
<li>Styles can be improved deeper making use of SCSS</li>
</ul>