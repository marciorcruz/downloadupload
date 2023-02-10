# Exemplo de Download e Upload

## Upload
```
curl --location --request POST 'http://localhost:3000/file' \
--form 'arquivo=@"/home/liqi-dev/Downloads/077db96579774e51a7869892aa09c362.png"'
```

## List
```
curl --location --request GET 'localhost:3000/file'
```

## Download
```
curl --location --request GET 'http://localhost:3000/file/1bd8b95cdbf23be6dc6c7eed78d0a172d0d8a4953704a6afb53a871ab316719975517e9b5cce0a84a888d6667f01718c53b6f3c381a27b127977038689f8f756.jpg' --output filedata.jpg

```