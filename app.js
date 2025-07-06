const btn = document.querySelector(".btn-favorite");
const icon = document.querySelector("i");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  if (icon.classList.contains("bi-heart")) {
    icon.classList.remove("bi-heart");
    icon.classList.add("bi-heart-fill");
    btn.innerHTML = '<i class="bi bi-heart-fill me-2"></i>已收藏';
  } else {
    icon.classList.remove("bi-heart-fill");
    icon.classList.add("bi-heart");
    btn.innerHTML = '<i class="bi bi-heart me-2"></i>加入收藏';
  }
});
