/*
脚本引用https://raw.githubusercontent.com/Yu9191/Rewrite/main/GTP4ohd.js
*/
if ($request.url.includes('api/img/aiSketch')) {
    let body = $request.body.replace(/("taskParameter"\s*:\s*)"\d+"/, '$1"0"');
    $done({ body: body });
} else {
    $done({});
}
