FROM huyth2403/tomcat-redis
WORKDIR /usr/local/tomcat/webapps
ADD ./build ./ROOT
WORKDIR /usr/local/tomcat/bin
#CMD ["./catalina.sh", "run"]
