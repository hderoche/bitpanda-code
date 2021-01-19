# BitpandaCode

Angular Project using the https://api.bitpanda.com/v1/masterdata end-point for Bitpanda code interview.

### To run the project

1. `ng build --prod` will create the dist repository

2. Then install any local server like Apache or other, I used `npm install http-server`

3. In the terminal, `cd ~/pathToProject` and `http-server dist/bitpanda-code`

4. The local server is now running, you can go to `http://localhost:8080` to view the application.

### Home screen

Landing page that contains a table and few paragraphs.

![hero](./readme/hero_banner.png)


### Tables

Using the data from the Bitpanda endpoint, there is no interraction, just for display.

![data](./readme/tables.png)
