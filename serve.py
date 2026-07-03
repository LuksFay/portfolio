import http.server
import os

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.translate_path(self.path)
        if os.path.isfile(path):
            return super().do_GET()
        self.path = '/index.html'
        return super().do_GET()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    server = http.server.HTTPServer(('0.0.0.0', port), SPAHandler)
    print(f'Serving SPA at http://localhost:{port}')
    server.serve_forever()
