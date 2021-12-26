# soundboard-challenge
Sounboard with client and server side

## Docker Repositories

<ul>
<li>khanon3d/challenge-soundboard-web</li>
<li>khanon3d/challenge-server</li>
</ul>

## How to test
Pull and Run both Docker containers for **soundboard** and **server**, no matter the order.
<br>
<br>
To do this, execute these commands (be sure you have **installed Docker** on your machine):
<ul>
<li>docker pull khanon3d/challenge-soundboard-web</li>
<li>docker pull khanon3d/challenge-server</li>
<li>docker run -d -it -p 4200:4200 khanon3d/challenge-soundboard-web</li>
<li>docker run -d -it -p 3000:3000 khanon3d/challenge-server</li>
</ul>

Once both containers are running, open the web on: http://localhost:4200<br>
Server is running on: http://localhost:3000

*Web Client* should retrieve sounds content from *server*.

Test server requests using you prefer API platform (E.g: Postman).

On **POST** Request **'/sounds'**, the *server* stores the new sounds data and it will notify to the *Web Client* there's new sounds data through WebSocket. At this point *Web Client* will ask the user to reload the content.

On **sound play**, server gets notified through **PUT** Request **/sounds/10/play** and will send back the new sound's price.

### NOTES
<ul>
<li>POST Request '/sounds' validation can be improved making use of NestJs validator</li>
<li>Many of the HTML schemas can be simplified using angular templates</li>
<li>Error responses should be controlled</li>
<li>Interceptors and guards should be implemented on server side to improve the security</li>
<li>Styles can be improved deeper making use of SCSS</li>
</ul>