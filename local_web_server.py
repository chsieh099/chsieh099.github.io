import http.server
import os
from http.server import HTTPServer

class HttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        html_paths_to_serve = set()
        for file in os.listdir("."):
            if file.endswith(".html"):
                html_paths_to_serve.add("/" + file.replace(".html", ""))
        if self.path in html_paths_to_serve:
            self.path += ".html"
        http.server.SimpleHTTPRequestHandler.do_GET(self)

with HTTPServer(('', 8000), HttpRequestHandler) as server:
    print("Running on site at localhost:8000")
    server.serve_forever()