
/* 
fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=720ac6da72764017985a7781d675701d')
.then(response => response.json())
.then(news => {

    console.log(news.articles[0])

}) */

const fatchData = async() => {
    const result = await fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=720ac6da72764017985a7781d675701d')
    const data = await result.json()

    for(let i = 0; i < data.articles.length; i++){
        createArticle(data.articles[i])
    }
}

fatchData()

const createArticle = (article) => {
    
    const bild = document.createElement('img')
    bild.src = article.urlToImage
    
    const titel = document.createElement('h2')
    titel.innerHTML = article.title
    
    const content = document.createElement('p')
    content.innerHTML = article.content
    
    const time = document.createElement('p')
    time.innerHTML = article.publishedAt.split('T')[0]
    
    const link = document.createElement('a')
    link.href = article.url
    link.innerHTML = "READ MORE"
    link.target = "_blank"
    
    const container = document.createElement('article')
    const container2 = document.createElement('div')

    container.append(bild,titel,content,container2)
    container2.append(time,link)

    document.querySelector('section').appendChild(container)
}
