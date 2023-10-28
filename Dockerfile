FROM ubuntu:latest
LABEL authors="khopkins"

ENTRYPOINT ["top", "-b"]