import { File, ServeOptions, WebSocketServeOptions } from "bun";
import { resolve } from "path";
import * as fs from "fs";

const ROOT_DIR = import.meta.url;
const SRC_DIR = resolve( ROOT_DIR, "src" );
const PUBLIC_DIR = resolve( ROOT_DIR, "public" );
const BUILD_DIR = resolve( ROOT_DIR, "build" );
const RELOAD_CMD = "/reload";

const html =
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>...</title>
      <link rel="stylesheet" href="styles/main.css" />
    </head>
    <body>
      <main id="app"></main>
      <script src="main.tsx"></script>
    </body>
  </html>;

export default {
  fetch: async ( request: Request ) => {
    const html = await template,;
    return new Response( html, {
      headers: {
        "content-type": "text/html"
      }
    } );
  },
  port: 8080,
  hostname: "localhost"
} satisfies ServeOptions;