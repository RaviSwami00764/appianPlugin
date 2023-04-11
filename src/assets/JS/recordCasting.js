let recordCastingRuleUtils=()=>{
    let riData = record_name.replace(/\s+/g,""); 
    return fields.map((x, i)=>`<div>${x}:if(<br>\t${checkIsNullFun}(ri!${x}),<br>\tindex(<br>\t\tri!${riData},<br>\t\t${recordFields[i]},<br>\t\t{}<br>\t),<br>\tri!${x}<br>)</div>`).join(",<br>");
}

let makeRecordCastingRule=()=>{
    let riData = record_name.replace(/\s+/g,"");
    let recordDefine = `'recordType!{${record_uuid}}${record_name}'`; 
    return `<pre>if(<br><div>and(<br>${logicalUtilsMaster()}<br>)</div>,<br>ri!${riData},<br>cast(<br>${recordDefine},<br>a!map(${recordCastingRuleUtils()}<br>)<br>)<br>)</pre>`;
}



let generateRecordCast = ()=>{ 

    let data = document.getElementById("code-editor").value;
    document.getElementById("result-wrapper").style.visibility = "visible";
    document.getElementById("result-wrapper").style.display = "block";

    getDataUtilsFun();

    let recordRegex = /fv\!row\[\'recordType\!(.*?)\'\]/g;
    let field_regex = /(?<=\})(.*?)(?=\')/g;
    let record_field_regex = /(?<=fv\!row\[)(.*?)(?=\])/g;
    let set = new Set(data.match(recordRegex));

    data = Array.from(set);
    
    record_uuid = data[0].match(/(?<=recordType\!\{)(.*?)(?=\})/g)[0];
    record_name = data[0].match(/(?<=\})(.*?)(?=\.fields\.)/g)[0];

    fields = data.map((x)=>{return x.split(".")[2].match(field_regex)[0]});
    recordFields = data.map((x)=>{return x.match(record_field_regex)[0]});



    //let appianCode = new AppianCode(fields, types, checkIsNullFun, cdtName);
    
    result = makeRecordCastingRule();
    
    let target = document.getElementById('code');
    target.innerHTML = result;

    showDownloadButton(true);  
    syntaxHighlights();

    document.getElementById("code-run").addEventListener("click", generateRecordCast);

} 