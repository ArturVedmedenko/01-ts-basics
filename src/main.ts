const app = document.getElementById("app");

if (app) {
  app.innerHTML = "<h1>Hello TypeScript + Vite!</h1>";
  console.log("App initialized");
} else {
  console.error('Element with id "app" not found');
}
