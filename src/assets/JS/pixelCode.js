const generateAppianCode=(data)=>{
    var result = data;

    result = quickRegexCodeGenerator(result);
    result = pixelCodeForSingleValueHolder(result);
    result = pixelCodeForMultipleValueHolder(result);
    console.log(result);
    result = setLabelATFinal(result);
    // APIs Call
    result = callCalendarAPI(result);
    return result;
}


const getAppianCode=()=>{
    document.getElementById("result-wrapper").style.visibility = "visible";
    document.getElementById("result-wrapper").style.display = "block";
    
    let data = document.getElementById('code-editor').value;
    let result = generateAppianCode(data);
    
    let target = document.getElementById('code');
    target.innerHTML = `<pre>${result}</pre>`;
    
    showDownloadButton(false);    
    syntaxHighlights();
    document.getElementById("code-run").addEventListener("click", getAppianCode);

    
}




// const generateAppianCode=(data)=>{
//   console.log(data);
//   var appianCodeFinalResult = data;
//   console.log(appianCodeFinalResult);
//   appianCodeFinalResult = quickRegexCodeGenerator(appianCodeFinalResult);
//   appianCodeFinalResult = pixelCodeForSingleValueHolder(appianCodeFinalResult);

//   appianCodeFinalResult = appianCodeFinalResult.replace(/\-clrCard\.(\w+)\s*\{/g, `-clrCard.h_$1{`);
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\clrCard+\.h_es\s*)\{/g, ` },\n height: "EXTRA_SHORT"\n)\n</div>`);
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\clrCard+\.h_s\s*)\{/g, ` },\n height: "SHORT"\n)\n</div>`);
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\clrCard+\.h_sp\s*)\{/g, ` },\n height: "SHORT_PLUS"\n)\n</div>`);
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\clrCard+\.h_m\s*)\{/g, ` },\n height: "MEDIUM"\n)\n</div>`);
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\clrCard+\.h_mp\s*)\{/g, ` },\n height: "MEDIUM_PLUS"\n)\n</div>`);
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\clrCard+\.h_t\s*)\{/g, ` },\n height: "TALL"\n)\n</div>`);
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\clrCard+\.h_tp\s*)\{/g, ` },\n height: "TALL_PLUS"\n)\n</div>`);
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\clrCard+\.h_et\s*)\{/g, ` },\n height: "EXTRA_TALL"\n)\n</div>`);
  
  
//   appianCodeFinalResult = appianCodeFinalResult.replace(/(\-\w+)\.\w+\s*\{/g,  "$1{");
//   appianCodeFinalResult = pixelCodeUtils(appianCodeFinalResult);
  
//   appianCodeFinalResult = getFinalappianCodeFinalResult(appianCodeFinalResult,/(?<=\-\w+\s*)\{/g, " }\n)\n</div>");
//   appianCodeFinalResult = pixelCodeUtils(appianCodeFinalResult);
//   // APIs Call
//   appianCodeFinalResult = callCalendarAPI(appianCodeFinalResult);
  
//   return appianCodeFinalResult;
// }

