const syntaxHighlights=()=>{
    var ca = document.getElementById("code");
    var keywords_regex = /(and|null|true|loggedInUser|wherecontains|touniformstring|tointeger|now|false|if|else|index|count|not|tointeger|toboolean|tostring|insert|remove|append)/g;
    var data = ca.innerHTML;
    // data = data.replace(/&lt;(.*?)&gt;/g, `<span class='code-elem'>&lt;$1&gt;</span>`);
    data = data.replace(/((type|rule|a|cons)!\w+)/g, `<span class='code-keywords'>$1</span>`);
    data = data.replace(/(\w+!\w+\.\w+)/g, `<span class='rule-inputs'>$1</span>`);
    data = data.replace(/(\w+!\w+)/g, `<span class='rule-inputs'>$1</span>`);
    data = data.replace(/(\w+:)/g, `<span class='code-key'>$1</span>`);
    
    data = data.replace(keywords_regex,`<span class='keywords'>$1</span>`);
    data = data.replace(/\*\//g, `*/</span>`);
    data = data.replace(/\/\*/g, `<span class='code-comment'>/*`);
    data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);
    // data = data.replace(/\/\*(.*?)\*\//g, `<span class='code-comment'>/*$1*/</span>`);
    
    // data = data.replace(/(.*?):/g, `<span class="code-key">$1:</span>`);
    ca.innerHTML = data;
    // for(let i=0; i<ca.length; i++){
        
    // }
    // var ca = document.getElementById("code");

    // var data = ca.innerText;
    // data = data.replace(/&lt;(.*?)&gt;/g, `<span class="code-elem">&lt;$1&gt;</span>`);
    // ca.innerHTML = data;

    // data = ca.innerText;
    // data = data.replace(/(\w+!\w+)/g, `<span class="code-keywords">$1</span>`);
    // ca.innerHTML = data;

    // data = ca.innerText;
    // data = data.replace(/(\w+:)/g, `<span class="code-key">$1</span>`);
    // ca.innerHTML = data;
    
    // data = ca.innerText;
    // data = data.replace(/"(.*?)"/g, `<span class="code-str">&quot;$1&quot;</span>`);
    // ca.innerHTML = data;

    // data = ca.innerText;
    // data = data.replace(/\/\*(.*?)\*\//g, `<span class="code-comment">/* $1 */</span>`);
    // ca.innerHTML = data;
    // data = data.replace(/(.*?):/g, `<span class="code-key">$1:</span>`);
// for(let i=0; i<ca.length; i++){
    
// }
}


const xsdSyntaxHighlights=()=>{
    var ca = document.getElementById("code");
    var data = ca.innerHTML;
    data = data.replace(/"(.*?)"/g, `<span class='code-str'>&quot;$1&quot;</span>`);
    data = data.replace(/&lt;(.*?)&gt;/g, `<span class='code-elem'>&lt;$1&gt;</span>`);
    data = data.replace(/\/\*(.*?)\*\//g, `<span class='code-comment'>/* $1 */</span>`);
    data = data.replace(/\@(\w+)/g, `<span class='xsd-keywords'>@$1</span>`);
    // data = data.replace(/(.*?):/g, `<span class="code-key">$1:</span>`);
    ca.innerHTML = data;
}

