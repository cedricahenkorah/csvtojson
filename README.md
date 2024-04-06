# CSV TO JSON

## Overview

A javascript application that reads csv files and converts them to json format

![screenshot of the json](/server/frontendimg.jpeg)

## Features

- Reads and converts csv files to json format
- Directly copy the json format to your clipboard

## Installation

To run this project, follow these steps:

1. **Clone the repository**

```shell
git clone https://github.com/cedricahenkorah/csvtojson
```

2. **Navigate to the project directory**

```shell
cd csvtojson
```

3. **Navigate to the frontend directory**

```shell
cd client
```

4. **Install packages**

```shell
npm install
```

5. **Set up your environment variables**

   Use the .env.Example provided and set up your .env.local file in the root of the project

   ```shell
   NEXT_PUBLIC_SERVER_URL="your server uri"
   ```

6. **Run the frontend**

```
npm run dev
```

7. **Now navigate to your server directory from the root directory**

```shell
cd server
```

8. **Set up environment variables**

   Use the .env.Example provided and set up your .env file in the root of the project

```shell
PORT="set port number for the server"
MONGO_URI="set mongo DB uri"
```

9. **Install the project dependencies**

```shell
npm install
```

10. **Run the server**

```shell
npm run watch
```

11. **Have fun converting csv to json :)**
