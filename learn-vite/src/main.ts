interface Article {
  id: number;
  category: string;
  publishedDate: string;
  title: string;
  description: string;
  author: string;
  imageArticle: string;
  authorAvatar: string;
}

async function fetchArticles(): Promise<Article[]> {
  try {
    // public 폴더에 있는 db.json 파일을 불러옵니다.
    const response = await fetch("https://67f815712466325443ebca74.mockapi.io/card");
    if (!response.ok) throw new Error("Failed to load articles");
    const data = await response.json();
    return data as Article[];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

function createArticleCard(article: Article): HTMLElement {
  const cardDiv = document.createElement("div");
  cardDiv.className =
    "md:w-96 w-80 bg-white p-6 border rounded-custom-medium shadow-custom hover:shadow-custom-lg hover:cursor-pointer";

  const innerDiv = document.createElement("div");

  // 이미지: illustration-article
  const img = document.createElement("img");
  img.src = article.imageArticle;
  img.alt = "blog image";
  img.className = "rounded-custom-small";
  innerDiv.appendChild(img);

  // 카테고리 텍스트
  const categoryP = document.createElement("p");
  categoryP.className =
    "capitalize text-black py-1 px-3 inline-block font-extrabold rounded bg-yellow mt-6";
  categoryP.textContent = article.category;
  innerDiv.appendChild(categoryP);

  // Published 날짜
  const pubSpan = document.createElement("span");
  pubSpan.className = "block my-3 capitalize text-black text-sm";
  pubSpan.textContent = article.publishedDate;
  innerDiv.appendChild(pubSpan);

  // 제목 링크와 h1
  const link = document.createElement("a");
  link.href = "#";
  link.className = "mb-3 block md:font-extrabold font-bold md:text-2xl text-xl hover:text-yellow";
  const h1 = document.createElement("h1");
  h1.textContent = article.title;
  link.appendChild(h1);
  innerDiv.appendChild(link);

  // 설명
  const descP = document.createElement("p");
  descP.className = "text-grey font-medium leading-6";
  descP.textContent = article.description;
  innerDiv.appendChild(descP);

  // 저자 정보
  const authorDiv = document.createElement("div");
  authorDiv.className = "mt-6 flex items-center";

  const authorImg = document.createElement("img");
  authorImg.src = article.authorAvatar;
  authorImg.alt = "blogger-img";
  authorImg.classList.add("blogger-img");
  authorDiv.appendChild(authorImg);

  const authorP = document.createElement("p");
  authorP.className = "ms-3 font-bold";
  authorP.textContent = article.author;
  authorDiv.appendChild(authorP);

  innerDiv.appendChild(authorDiv);
  cardDiv.appendChild(innerDiv);

  // 카드 클릭 이벤트 (예제)
  cardDiv.addEventListener("click", () => {
    console.log(`Article ${article.id} clicked!`);
    alert(`You clicked on "${article.title}"`);
  });

  return cardDiv;
}

async function init() {
  const mainElement = document.querySelector("main") as HTMLElement;
  if (!mainElement) {
    console.error("Main element not found");
    return;
  }
  const articles = await fetchArticles();
  articles.forEach((article) => {
    const card = createArticleCard(article);
    mainElement.appendChild(card);
  });
}

init();
