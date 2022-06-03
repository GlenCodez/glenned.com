server {
		listen 80;
		listen [::]:80;

		root /var/www/glen.com/html;
		index index.html index.htm index.nginx-debian.html;

		server_name glen.com www.glen.com;

		location / {
				try_files / =404;
		}
}
