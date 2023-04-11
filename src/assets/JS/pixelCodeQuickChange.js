let pixelCodeHeightHandler = (data) =>{
    let result = data;

    // result = result.replace(/(\-\w+\.\w+\.\w+\s*)\{/g,  "$1 {"); 
    // result = result.replace(/(\-\w+\.\w+\s*)\{/g,  "$1 {"); 
    //================================== for CardLayout setHeight =================================
    // result = getFinalResult(result,/(?<=\-clrCard\.)(\w+)\s*\{/g, ` },\n height: "$setHeight "\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-clrCard\.es\s*)\{/g, ` },\n height: "EXTRA_SHORT"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-clrCard\.s\s*)\{/g, `  },\n height: "SHORT"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-clrCard\.ss\s*)\{/g, ` },\n height: "SHORT_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-clrCard\.m\s*)\{/g, `  },\n height: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-clrCard\.mm\s*)\{/g, ` },\n height: "MEDIUM_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-clrCard\.t\s*)\{/g, `  },\n height: "TALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-clrCard\.tt\s*)\{/g, ` },\n height: "TALL_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-clrCard\.et\s*)\{/g, ` },\n height: "EXTRA_TALL"\n)\n</div>`);
    
    result = result.replace(/(\-clrCard\.\w+\s*\{)/g,  "-clrCard{");   
  
    //================================== for CardLayout setHeight =================================
    result = getFinalResult(result,/(?<=\-card\.es\s*)\{/g, ` },\n height: "EXTRA_SHORT"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-card\.s\s*)\{/g, `  },\n height: "SHORT"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-card\.ss\s*)\{/g, ` },\n height: "SHORT_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-card\.m\s*)\{/g, `  },\n height: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-card\.mm\s*)\{/g, ` },\n height: "MEDIUM_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-card\.t\s*)\{/g, `  },\n height: "TALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-card\.tt\s*)\{/g, ` },\n height: "TALL_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-card\.et\s*)\{/g, ` },\n height: "EXTRA_TALL"\n)\n</div>`);
    
    result = result.replace(/(\-card\.\w+\s*\{)/g,  "-card{");

    //================================== for richTextDisplayField alignItems =================================
    result = getFinalResult(result,/(?<=\-rd\.l\s*)\{/g, ` },\n align: "LEFT"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rd\.c\s*)\{/g, ` },\n align: "CENTER"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rd\.r\s*)\{/g, ` },\n align: "RIGHT"\n)\n</div>`);
    
    result = result.replace(/(\-rd\.\w+\s*\{)/g,  "-rd{");
    
    //================================== for richTextItem resize =================================

    result = getFinalResult(result,/(?<=\-rt\.s\s*)\{/g, `  },\n size: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.st\s*)\{/g, ` },\n size: "STANDARD"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.m\s*)\{/g, `  },\n size: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.mm\s*)\{/g, ` },\n size: "MEDIUM_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.l\s*)\{/g, `  },\n size: "LARGE"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.ll\s*)\{/g, ` },\n size: "LARGE_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.el\s*)\{/g, ` },\n size: "EXTRA_LARGE"\n)\n</div>`);

    result = getFinalResult(result,/(?<=\-rt\.s\.em\s*)\{/g, `  },\n style:"EMPHASIS", \nsize: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.m\.em\s*)\{/g, `  },\n style:"EMPHASIS", \nsize: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.l\.em\s*)\{/g, `  },\n style:"EMPHASIS", \nsize: "LARGE"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.mm\.em\s*)\{/g, ` },\n style:"EMPHASIS", \nsize: "MEDIUM_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.st\.em\s*)\{/g, ` },\n style:"EMPHASIS", \nsize: "STANDARD"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.ll\.em\s*)\{/g, ` },\n style:"EMPHASIS", \nsize: "LARGE_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.el\.em\s*)\{/g, ` },\n style:"EMPHASIS", \nsize: "EXTRA_LARGE"\n)\n</div>`);

    result = getFinalResult(result,/(?<=\-rt\.s\.st\s*)\{/g, `  },\n style:"STRONG", \nsize: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.m\.st\s*)\{/g, `  },\n style:"STRONG", \nsize: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.l\.st\s*)\{/g, `  },\n style:"STRONG", \nsize: "LARGE"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.mm\.st\s*)\{/g, ` },\n style:"STRONG", \nsize: "MEDIUM_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.st\.st\s*)\{/g, ` },\n style:"STRONG", \nsize: "STANDARD"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.ll\.st\s*)\{/g, ` },\n style:"STRONG", \nsize: "LARGE_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.el\.st\s*)\{/g, ` },\n style:"STRONG", \nsize: "EXTRA_LARGE"\n)\n</div>`);

    result = getFinalResult(result,/(?<=\-rt\.s\.ud\s*)\{/g, `  },\n style:"UNDERLINE", \nsize: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.m\.ud\s*)\{/g, `  },\n style:"UNDERLINE", \nsize: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.l\.ud\s*)\{/g, `  },\n style:"UNDERLINE", \nsize: "LARGE"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.mm\.ud\s*)\{/g, ` },\n style:"UNDERLINE", \nsize: "MEDIUM_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.st\.ud\s*)\{/g, ` },\n style:"UNDERLINE", \nsize: "STANDARD"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.ll\.ud\s*)\{/g, ` },\n style:"UNDERLINE", \nsize: "LARGE_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-rt\.el\.ud\s*)\{/g, ` },\n style:"UNDERLINE", \nsize: "EXTRA_LARGE"\n)\n</div>`);
    
    result = result.replace(/(\-rt\.\w+\.\w+\s*\{)/g,  "-rt{");
    result = result.replace(/(\-rt\.\w+\s*\{)/g,  "-rt{");

    //================================== for richTextIcon resize =================================

    result = getFinalResult(result,/(?<=\-ri\.s\s*)\{/g, `  },\n size: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-ri\.st\s*)\{/g, ` },\n size: "STANDARD"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-ri\.m\s*)\{/g, `  },\n size: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-ri\.mm\s*)\{/g, ` },\n size: "MEDIUM_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-ri\.l\s*)\{/g, `  },\n size: "LARGE"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-ri\.ll\s*)\{/g, ` },\n size: "LARGE_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-ri\.el\s*)\{/g, ` },\n size: "EXTRA_LARGE"\n)\n</div>`);

    result = result.replace(/(\-ri\.\w+\s*\{)/g,  "-ri{");

    //================================== for columnsLayout align =================================

    result = getFinalResult(result,/(?<=\-cls\.t\s*)\{/g, `  },\n alignVertical: "TOP"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cls\.m\s*)\{/g, ` },\n  alignVertical: "MIDDLE"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cls\.b\s*)\{/g, `  },\n alignVertical: "BOTTOM"\n)\n</div>`);
    

    result = getFinalResult(result,/(?<=\-cls\.t.sd\s*)\{/g, `  },\n showDividers: true(),\nalignVertical: "TOP"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cls\.m.sd\s*)\{/g, ` },\n  showDividers: true(),\nalignVertical: "MIDDLE"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cls\.b.sd\s*)\{/g, `  },\n showDividers: true(),\nalignVertical: "BOTTOM"\n)\n</div>`);

    result = result.replace(/(\-cls\.\w+\.\w+\s*\{)/g,  "-cls{");
    result = result.replace(/(\-cls\.\w+\s*\{)/g,  "-cls{");


    //================================== for columnsLayout align =================================

    // width (Text): Determines the column width. Valid values: "AUTO" (default), "EXTRA_NARROW", "NARROW", "NARROW_PLUS", "MEDIUM", "MEDIUM_PLUS", "WIDE", "WIDE_PLUS", "1X", "2X", "3X", "4X", "5X", "6X", "7X", "8X", "9X", "10X".
    
    result = getFinalResult(result,/(?<=\-cl\.en\s*)\{/g, `  },\n width: "EXTRA_NARROW"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.n\s*)\{/g, ` },\n  width: "NARROW"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.nn\s*)\{/g, `  },\n width: "NARROW_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.m\s*)\{/g, `  },\n width: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.mm\s*)\{/g, ` },\n  width: "MEDIUM_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.w\s*)\{/g, `  },\n width: "WIDE"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.ww\s*)\{/g, `  },\n width: "WIDE_PLUS"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.auto\s*)\{/g, `  },\n width: "AUTO"\n)\n</div>`);

    result = getFinalResult(result,/(?<=\-cl\.1x\s*)\{/g, `  },\n width: "1X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.2x\s*)\{/g, `  },\n width: "2X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.3x\s*)\{/g, `  },\n width: "3X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.4x\s*)\{/g, `  },\n width: "4X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.5x\s*)\{/g, `  },\n width: "5X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.6x\s*)\{/g, `  },\n width: "6X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.7x\s*)\{/g, `  },\n width: "7X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.8x\s*)\{/g, `  },\n width: "8X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.9x\s*)\{/g, `  },\n width: "9X"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-cl\.10x\s*)\{/g, ` },\n width: "10X"\n)\n</div>`);

    result = result.replace(/(\-cl\.\w+\s*\{)/g,  "-cl{");


    //================================== for gridColumn align =================================
    //  (Text): Determines the column width. Valid values: "AUTO" (default), "ICON", "ICON_PLUS", "NARROW", "NARROW_PLUS", 
    // "MEDIUM", "MEDIUM_PLUS", "WIDE", "1X", "2X", "3X", "4X", "5X", "6X", "7X", "8X", "9X", and "10X".

    // result = getFinalResult(result,/(?<=\-gc\.i\s*)\{/g, `  },\n width: "ICON"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.n\s*)\{/g, ` },\n  width: "NARROW"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.nn\s*)\{/g, `  },\n width: "NARROW_PLUS"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.m\s*)\{/g, `  },\n width: "MEDIUM"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.mm\s*)\{/g, ` },\n  width: "MEDIUM_PLUS"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.w\s*)\{/g, `  },\n width: "WIDE"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.ii\s*)\{/g, `  },\n width: "ICON_PLUS"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.auto\s*)\{/g, `  },\n width: "AUTO"\n)\n</div>`);

    // result = getFinalResult(result,/(?<=\-gc\.1x\s*)\{/g, `  },\n width: "1X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.2x\s*)\{/g, `  },\n width: "2X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.3x\s*)\{/g, `  },\n width: "3X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.4x\s*)\{/g, `  },\n width: "4X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.5x\s*)\{/g, `  },\n width: "5X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.6x\s*)\{/g, `  },\n width: "6X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.7x\s*)\{/g, `  },\n width: "7X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.8x\s*)\{/g, `  },\n width: "8X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.9x\s*)\{/g, `  },\n width: "9X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.10x\s*)\{/g, ` },\n width: "10X"\n)\n</div>`);

    // result = getFinalResult(result,/(?<=\-gc\.1x\s*)\{/g, `  },\n width: "1X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.2x\s*)\{/g, ` },\n  width: "2X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.3x\s*)\{/g, `  },\n width: "3X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.4x\s*)\{/g, ` },\n  width: "4X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.5x\s*)\{/g, `  },\n width: "5X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.6x\s*)\{/g, ` },\n  width: "6X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.7x\s*)\{/g, ` },\n  width: "7X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.8x\s*)\{/g, `  },\n width: "8X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.9x\s*)\{/g, ` },\n  width: "9X"\n)\n</div>`);
    // result = getFinalResult(result,/(?<=\-gc\.10x\s*)\{/g, ` },\n  width:"10X"\n)\n</div>`);
        
    // result = result.replace(/(\-gc\.\w+\s*\{)/g,  "-gc{");



    //================================== for sectionLayout set dividerWeight =================================
    result = getFinalResult(result,/(?<=\-section\.t1\s*)\{/g, ` },\n dividerWeight: "THIN"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-section\.t2\s*)\{/g, ` },\n dividerWeight: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-section\.t3\s*)\{/g, ` },\n dividerWeight: "THICK"\n)\n</div>`);
    
    result = result.replace(/(\-section\.\w+\s*\{)/g,  "-section{");
    

    //================================== for tagField set alignment and size =================================
    result = getFinalResult(result,/(?<=\-tags\.l\s*)\{/g, ` },\n align: "START"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-tags\.c\s*)\{/g, ` },\n align: "CENTER"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-tags\.r\s*)\{/g, ` },\n align: "END"\n)\n</div>`);

    result = getFinalResult(result,/(?<=\-tags\.l.s\s*)\{/g, ` },\n size:"SMALL",\n align: "START"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-tags\.c.s\s*)\{/g, ` },\n size:"SMALL",\n align: "CENTER"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-tags\.r.s\s*)\{/g, ` },\n size:"SMALL",\n align: "END"\n)\n</div>`);
    
    result = result.replace(/(\-tags\.\w+\.\w+\s*\{)/g,  "-tags{");
    result = result.replace(/(\-tags\.\w+\s*\{)/g,  "-tags{");


    //================================== for stampField set alignment and size =================================
    result = getFinalResult(result,/(?<=\-stm\.t\s*)\{/g, ` },\n size: "TINY"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.s\s*)\{/g, ` },\n size: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.m\s*)\{/g, ` },\n size: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.l\s*)\{/g, ` },\n size: "LARGE"\n)\n</div>`);

    result = getFinalResult(result,/(?<=\-stm\.t\.l\s*)\{/g, ` },\n align:"START",\n size: "TINY"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.s\.l\s*)\{/g, ` },\n align:"START",\n size: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.m\.l\s*)\{/g, ` },\n align:"START",\n size: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.l\.l\s*)\{/g, ` },\n align:"START",\n size: "LARGE"\n)\n</div>`);

    result = getFinalResult(result,/(?<=\-stm\.t\.c\s*)\{/g, ` },\n align:"CENTER",\n size: "TINY"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.s\.c\s*)\{/g, ` },\n align:"CENTER",\n size: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.m\.c\s*)\{/g, ` },\n align:"CENTER",\n size: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.l\.c\s*)\{/g, ` },\n align:"CENTER",\n size: "LARGE"\n)\n</div>`);

    result = getFinalResult(result,/(?<=\-stm\.t\.r\s*)\{/g, ` },\n align:"END",\n size: "TINY"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.s\.r\s*)\{/g, ` },\n align:"END",\n size: "SMALL"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.m\.r\s*)\{/g, ` },\n align:"END",\n size: "MEDIUM"\n)\n</div>`);
    result = getFinalResult(result,/(?<=\-stm\.l\.r\s*)\{/g, ` },\n align:"END",\n size: "LARGE"\n)\n</div>`);
    
    
    result = result.replace(/(\-stm\.\w+\.\w+\s*\{)/g,  "-stm{");
    result = result.replace(/(\-stm\.\w+\s*\{)/g,  "-stm{");
    
    return result;
  }