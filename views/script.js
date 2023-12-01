function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    var bootstrapCollapse = new bootstrap.Collapse(answer);
    bootstrapCollapse.toggle();
}
