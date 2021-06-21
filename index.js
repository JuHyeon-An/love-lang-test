Kakao.init("a383315a540feaf82751b941dd058da6");
console.log(Kakao.isInitialized());

var num = 1;

var q = {
  1: {
    Q1: {
      answer: "나는 상대로부터 인정받는 말 듣는 것을 <br>좋아한다.",
      type: "A",
    },
    Q2: {
      answer: "나는 상대가 안아주는 것을 좋아한다.",
      type: "E",
    },
  },
  2: {
    Q1: {
      answer: "나는 상대와 단둘이 보내는 시간을 <br>좋아한다.",
      type: "B",
    },
    Q2: {
      answer: "나는 상대가 실질적인 도움을 줄 때 <br>사랑을 느낀다.",
      type: "D",
    },
  },
  3: {
    Q1: {
      answer: "나는 상대에게 선물 받는 것을 좋아한다.",
      type: "C",
    },
    Q2: {
      answer: "나는 상대와 함께 산책하는 시간을 <br>좋아한다.",
      type: "B",
    },
  },
  4: {
    Q1: {
      answer: "나는 상대가 나를 도와줄 때 <br>사랑을 느낀다.",
      type: "D",
    },
    Q2: {
      answer: "나는 상대에게 가벼운 신체 접촉을 받을 때 <br>사랑을 느낀다.",
      type: "E",
    },
  },
  5: {
    Q1: {
      answer: "나는 상대가 감싸 안아 줄 때 <br>사랑을 느낀다.",
      type: "E",
    },
    Q2: {
      answer: "나는 상대에게 선물을 받을 때 <br>사랑을 느낀다.",
      type: "C",
    },
  },
  6: {
    Q1: {
      answer: "나는 상대와 함께 외출하는 것을 <br>좋아한다.",
      type: "B",
    },
    Q2: {
      answer: "나는 상대와 손잡는 것을 좋아한다.",
      type: "E",
    },
  },
  7: {
    Q1: {
      answer: "나는 상대가 나를 인정해 줄 때 <br>사랑을 느낀다.",
      type: "A",
    },
    Q2: {
      answer: "나에게는 눈에 보이는 선물이<br> 매우 의미가 있다.",
      type: "C",
    },
  },
  8: {
    Q1: {
      answer: "나는 상대와 함께 붙어 앉는 것을<br> 좋아한다.",
      type: "E",
    },
    Q2: {
      answer: "나는 상대가 나에 대해 매력적이라고 <br>할 때 좋아한다.",
      type: "A",
    },
  },
  9: {
    Q1: {
      answer: "나는 상대와 함께 시간 보내는 것을 <br>좋아한다.",
      type: "B",
    },
    Q2: {
      answer: "나는 상대에게 작지만 선물받는 것을 <br>좋아한다.",
      type: "C",
    },
  },
  10: {
    Q1: {
      answer: "나는 상대가 나를 도와줄 때 <br>사랑을 느낀다.",
      type: "D",
    },
    Q2: {
      answer: "나를 이해해주는 말들이 <br>나에게는 중요하다.",
      type: "A",
    },
  },
  11: {
    Q1: {
      answer: "나는 상대와 뭔가 함께 하는 것을<br> 좋아한다.",
      type: "B",
    },
    Q2: {
      answer: "나는 상대가 해주는 친절한 말들을 <br>좋아한다.",
      type: "A",
    },
  },
  12: {
    Q1: {
      answer: "나는 상대와 포옹할 때 완전함을 느낀다.",
      type: "E",
    },
    Q2: {
      answer: "나는 상대의 말보다 행동을 볼 때 <br>더 감동한다.",
      type: "D",
    },
  },
  13: {
    Q1: {
      answer: "나는 상대의 칭찬을 좋아하고 <br>비판을 회피하는 편이다.",
      type: "A",
    },
    Q2: {
      answer: "나는 커다란 선물보다는 작지만 <br>자주 받는 것을 좋아한다.",
      type: "C",
    },
  },
  14: {
    Q1: {
      answer: "나는 상대가 자주 신체접촉해 줄 때 <br>더 친근함을 느낀다.",
      type: "E",
    },
    Q2: {
      answer: "나는 상대와 함께 뭔가 하거나 <br>이야기할 때 친밀함을 느낀다.",
      type: "B",
    },
  },
  15: {
    Q1: {
      answer: "나는 상대가 내가 해 낸 일에 대해 <br>칭찬하는 것을 좋아한다.",
      type: "A",
    },
    Q2: {
      answer:
        "나는 상대가 나를 위해 기꺼이 하기 싫은 <br>일을 해 줄때 진정한 사랑을 느낀다.",
      type: "D",
    },
  },
  16: {
    Q1: {
      answer: "나는 상대와 걸을 때 손잡아(어깨감싸)<br>주는 것을 좋아한다.",
      type: "E",
    },
    Q2: {
      answer: "나는 상대가 내 이야기에 공감하면서 <br>들어주는 것을 좋아한다.",
      type: "B",
    },
  },
  17: {
    Q1: {
      answer: "나는 상대에게 선물받는 것을 <br>정말 즐거워한다.",
      type: "C",
    },
    Q2: {
      answer: "나는 상대가 집안일을 도와줄 때 사랑을 느낀다.",
      type: "D",
    },
  },
  18: {
    Q1: {
      answer: "나는 상대방이 내 외모에 대해 <br>칭찬해주는 것을 좋아한다.",
      type: "A",
    },
    Q2: {
      answer:
        "나는 상대가 내 기분을 이해하기 위해 <br>시간을 내 줄때 사랑을 느낀다.",
      type: "B",
    },
  },
  19: {
    Q1: {
      answer: "나는 상대가 나를 어루만져 줄 때 <br>평안함을 느낀다.",
      type: "E",
    },
    Q2: {
      answer: "나는 상대의 수고에 사랑을 느낀다.",
      type: "D",
    },
  },
  20: {
    Q1: {
      answer: "나는 나를 위해 수고하는 <br>상대에게 고마움을 느낀다.",
      type: "D",
    },
    Q2: {
      answer: "나는 상대가 만든(준비한) <br>선물을 받는 것을 좋아한다.",
      type: "C",
    },
  },
  21: {
    Q1: {
      answer:
        "나는 상대가 나에게 전념(집중)할 때 <br>그 느낌을 굉장히 좋아한다.",
      type: "B",
    },
    Q2: {
      answer:
        "나는 상대가 나를 위해 실제로 행할 때 <br>그 느낌을 굉장히 좋아한다.",
      type: "D",
    },
  },
  22: {
    Q1: {
      answer:
        "나는 상대가 선물과 함께 <br>내 생일을 축하해 줄 때 <br>사랑을 느낀다.",
      type: "C",
    },
    Q2: {
      answer:
        "나는 내 생일 때 의미있는 말<br>(카드에 쓰거나)을 하며 축하해줄 때 <br>사랑을 느낀다.",
      type: "A",
    },
  },
  23: {
    Q1: {
      answer: "나는 상대가 집안일을 도와줄 때 사랑을 느낀다.",
      type: "D",
    },
    Q2: {
      answer: "나는 상대가 선물을 줄 때 <br>나를 사랑해주는 것이라고 느낀다.",
      type: "C",
    },
  },
  24: {
    Q1: {
      answer:
        "나는 상대가 선물과 함께 특정한 날을 <br>기억해 줄 때 고마움을 느낀다.",
      type: "C",
    },
    Q2: {
      answer:
        "나는 상대가 끝까지 인내를 가지고 <br>이야기를 들어줄 때 고마움을 느낀다.",
      type: "B",
    },
  },
  25: {
    Q1: {
      answer: "나는 상대와 장기간 여행을 즐긴다<br>(원한다)",
      type: "B",
    },
    Q2: {
      answer:
        "나는 상대가 내가 하는 일상적인 일에 <br>충분히 관심을 기울여 주기를 바란다.",
      type: "D",
    },
  },
  26: {
    Q1: {
      answer: "기대하지 않은 입맞춤이 나를 흥분시킨다.",
      type: "E",
    },
    Q2: {
      answer: "특별하지 않은 때라도 받는 선물은 <br>나를 흥분시킨다.",
      type: "C",
    },
  },
  27: {
    Q1: {
      answer: "나는 상대에게 고맙다는 말을 듣는 것을 <br>좋아한다.",
      type: "A",
    },
    Q2: {
      answer: "나는 상대가 이야기 하는 동안 <br>나를 바라보는 것을 좋아한다.",
      type: "B",
    },
  },
  28: {
    Q1: {
      answer: "나는 상대가 준 선물은 언제나 <br>특별하고 좋다.",
      type: "C",
    },
    Q2: {
      answer: "나는 상대가 안아주는 것을 좋아한다.",
      type: "E",
    },
  },
  29: {
    Q1: {
      answer:
        "나는 상대가 얼마나<br> 나에게 고마워하고 있는지 <br>말해 줄 때 사랑을 느낀다.",
      type: "A",
    },
    Q2: {
      answer:
        "나는 상대가 내가 부탁한 일에 <br>최선을 다해 줄 때 <br>사랑을 느낀다.",
      type: "D",
    },
  },
  30: {
    Q1: {
      answer: "나는 매일 가벼운 신체 접촉을 원한다.",
      type: "E",
    },
    Q2: {
      answer: "나는 매일 상대방의 지지하는 말이 <br>필요하다.",
      type: "A",
    },
  },
};

var featureData = [
  {
    type: "A",
    score: 0,
    title: "인정",
    explain: [
      "상대방의 자발적인 칭찬과 감사하는 말에 기쁨과 행복을 느낍니다.",
      "따라서 '사랑해, 고마워, 잘했어' 등의 말을 듣는 것을 중요하게 생각합니다.<br><br>",
      "또한 친절한 행동에 감사를 표현해 주길 바랍니다.",
      "가족의 경우는 '표현하지 않아도 감사한 마음을 다 알아주겠지'라는 생각 때문에 당연한 행동인 듯 무반응일 때가 있습니다.",
      "작은 일에도 고마움을 표현해 주는 것이 필요합니다.<br><br>",
      "이들에게 격려의 말은 용기를 북돋아주고 안정감을 줍니다. 무언가를 부탁할 때도 정중하게 표현하게 되면 자신을 인격과 능력을 인정한다고 생각합니다.<br><br>",
      "반대로 누구나 인정하는 말을 좋아하지만 특히 '인정하는 말'이 사랑의 언어인 사람은 상대방이 무심코 던진 말이 큰 상처가 되고 아파할 수 있다는 것을 알아야 합니다.",
      "말이 중요하다는 것 잊지 마세요.<br><br>",
      "뜻밖의 전화 한 통, 진심이 담긴 카드나 메모도 좋고 카톡도 좋습니다.",
      "사랑을 표현하는 말을 자주 해주세요.",
      "부정적이고 비판적인 말, 명령, 욕설, 영혼 없는 말은 평생 동안 기억에 남아 자존감에도 영향을 끼칠 수 있답니다.",
    ],
  },
  {
    type: "B",
    score: 0,
    title: "함께하는 시간",
    explain: [
      "서로에게 집중하여 함께 있는 시간을 많이 가져야 사랑 받는다고 느낍니다.",
      "함께 시간을 나누면서 하는 일이 무엇인지는 별로 중요하지 않습니다.<br><br>",
      "다만 함께 시간을 보내는 사람이 소중하고 그 사람과 시간을 공유하지 못하면 애정결핍을 느끼게 됩니다.",
      "단순히 시간만 함께 하는 것이 아니라 TV를 끄고, 하던 일을 멈추고, 자신에게 집중해 주는 것을 원합니다.<br><br>",
      "대화하면서 다른 일을 하거나 약속을 미루거나, 경청을 하지 않을 경우 상처가 될 수 있습니다.",
      "왜냐하면 함께하는 시간은 서로가 감정적으로 관심을 집중시키면서 시간을 보내는 것이라고  생각하기 때문입니다.<br><br>",
      "온 우주에 그대만 있다는 듯이 함께하는 시간을 소중하게 생각합니다.",
      "1:1로 대화하고 경청하는 것을 원하고 함께하는 행동에 의미를 둡니다.<br><br>",
      "특별한 순간을 만들면 오래 행복감을 느끼고 진정한 대화를 원합니다.",
      "대화를 할 때 딴짓을 하거나 객관적인 비판을 하는 것은 좋지 않습니다.",
    ],
  },
  {
    type: "C",
    score: 0,
    title: "선물",
    explain: [
      "상징적인 의미를 지닌 물건을 통해 사랑을 확인받는 사람들입니다.",
      "상대방이 준 선물을 특별하게 기억하고 간직하기 때문에 선물을 주고받는 것을 종아 합니다.<br><br>",
      "'선물'이라는 사랑의 언어를 물질주의 속물근성과 혼돈하지 않아야 합니다.",
      "이 사람은 선물에 담겨있는 사랑과 사려 깊음 선물을 준비하기까지의 관심과 노력을 소중하게 생각하는 것이니까요.",
      "선물은 '당신을 소중하게 여기고 배려하는 마음'이 담겨 있기 때문이죠.<br><br>",
      "따라서 생일이나 결혼기념일 등 의미 있는 날을 잊거나 성의 없이 준비한 선물은 오히려 큰 상처가 될 수 있습니다.",
      "굳이 비싼 선물을 나눌 필요는 없습니다.",
      "선물을 통해 생각하는 마음이 담겨있는 선물을 전달하는 것이 중요합니다.<br><br>",
      "그러기 위해서는 일상에서 상대방의 말에 귀 기울이는 노력이 필요하겠죠. 뜻밖의 선물은 더 큰 감동을 줍니다.",
      "선물이 사랑의 언어인 사람에게 선물을 받는다면 감사 리액션을 꼭 해주셔야 합니다.<br><br>",
      "기념일을 잊어버리거나 영혼 없이 준비한 선물, 받고도 무반응인 모습은 상처가 될 수 있다는 걸 기억하세요.",
    ],
  },
  {
    type: "D",
    score: 0,
    title: "봉사",
    explain: [
      "제1의 언어가 <봉사>인 경우는 자신이 원하는 것을 해주는 것을 말합니다.",
      "식사 준비를 하거나 설거지, 청소, 육아 등 가사노동, 아플 때 다른 사람을 돌보는 것 등 노력과 수고가 필요한 일을 해주는 것이 해당됩니다.<br><br>",
      "행동하는 것을 의사소통하는 수단으로 생각하는 거죠.",
      "상대방을 생각하고 기꺼이 행동해 주는 마음에서 사랑이 전해지는 겁니다.",
      "이건 당연한 거 아니야? 라고 생각할 수 있지만 제 1의 언어가 <봉사>인 사람은 자신을 위해 행동해주는 것에서 사랑을 느낍니다.<br><br>",
      "물론 의무적이거나 억지로 하는 봉사는 해당되지 않겠죠.",
      "자발적으로 이런 행동을 하면 정말 놀라운 사랑의 표현이 됩니다.<br><br>",
      ' "뭐 도와줄 거 없어?", "그거 내가 해줄게."<br><br>',
      "상대방을 도와주는 것이 기쁘고, 상대방이 가장 원하는 것을 해주는 행동이 사랑을 표현하는 것이라 생각합니다.<br><br>",
      "따라서 게으름을 피우거나 약속 위반을 하는 것은 이 언어를 사용하는 사람들에게 심각한 일일 수 있죠.",
      "시켜야 하는 행동이나, 하고 나서 생색을 내는 것도 좋지 않습니다.",
    ],
  },
  {
    type: "E",
    score: 0,
    title: "스킨십",
    explain: [
      "스킨십은 사랑을 가장 잘 표현할 수 있는 언어 중 하나입니다.",
      "손을 잡아주거나, 키스를 하거나, 가만히 안기는 등 신체 접촉을 통해서 사랑을 느끼게 되는 것이죠.<br><br>",
      "연구에 의하면 스킨십을 하지 않은 아이보다 안아주고 보듬어주는 스킨십을 해준 아이들이 정서적으로 훨씬 건강하게 자랍니다.",
      "따라서 남녀노소 할 것 없이 스킨십은 중요한 사랑의 언어입니다.<br><br>",
      "스킨십은 단순히 침실에 관한 것만이 아닙니다.",
      "부모님의 손을 잡는 것만으로도 가슴속에 찡한 감정이 느껴진 적 있으시죠.",
      "아무 말 없이 살며시 안아주고 등을 두드려주는 것만으로도 상대방의 마음이 전해집니다.<br><br>",
      "포옹이나 등 두드리기, 손잡기, 어깨나 팔, 얼굴 등을 만지는 것을 통해 자신의 감정을 표현하는 것을 좋아하고 받는 것을 좋아하는 타입입니다.",
      "서로를 신뢰하며 상호 합의하에 스킨십을 나누는 것이 중요합니다.<br><br>",
      "토닥토닥, 쓰담쓰담 등의 행동이 사랑으로 전해집니다.",
      "단, 상대방이 싫다는 의사표시에도 강제적으로 혹은 위협으로 스킨십을 하는 행동은 절대 하면 안 되는 행동입니다.",
    ],
  },
];

function start() {
  $(".start").hide();
  $("#question").show();
  next();
}

function restart() {
  location.reload();
}

$(".answer-group button").on("click", function () {
  var type = $(this).data("type");
  //var cnt = Number(featureData).val());
  featureData.forEach(function (ele) {
    if (type == ele["type"]) {
      ele["score"] += 1;
    }
  });
  //cnt++;

  next();
});

$("#A").click(function () {
  var type = $("#type").val();
  var preValue = Number($("#" + type).val());
  $("#" + type).val(preValue + 1);
  next();
});
$("#B").click(function () {
  next();
});

function showResult() {
  let r_text = "";
  featureData.forEach((ele) => {
    ele.explain = ele.explain.join(" ");
    r_text += `<div class='explain-wrap mt-3'><span class='explain-title mt-1'>${ele.title} (${ele.score}점) </span>`;
    r_text += `<div class='explain-text mt-2'>${ele.explain}</div></div>`;
  });

  $("#explain").html(r_text);
}

function next() {
  addProgress();

  if (num == 31) {
    // 마지막 문제가 끝났을 때 -> 결과

    // 점수 내림차순 정렬
    featureData.sort(function (ele1, ele2) {
      return ele1.score < ele2.score ? 1 : ele1.score > ele2.score ? -1 : 0;
    });

    //console.log(featureData);
    $("#question").hide();
    $("#result").show();
    $("#share_area").show();
    $(".restart-btn").show();

    let result_01 = [];
    let result_02 = [];

    let first_value = Number(featureData[0].score);
    let second_value = 0;

    for (const element of featureData) {
      if (first_value == element.score) {
        result_01.push(element.title);
      } else {
        second_value = element.score;
        break;
      }
    }

    featureData.forEach((element) => {
      if (second_value == element.score) {
        result_02.push(element.title);
      }
    });

    $("#result_01").html(result_01.join(", "));
    $("#result_02").html(result_02.join(", "));

    showResult();
  } else {
    // 각 부분에 자바스크립트 객체 요소를 넣는다
    $("#title").html(num + " / 30");
    $("#Q1").html(q[num]["Q1"]["answer"]);
    $("#Q2").html(q[num]["Q2"]["answer"]);

    $("#Q1").data("type", q[num]["Q1"]["type"]);
    $("#Q2").data("type", q[num]["Q2"]["type"]);
    num++;
  }
}

function addProgress() {
  $(".progress-bar").attr("style", "width : calc(100/30*" + num + "%)");
}

function copyUrl() {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("url이 복사되었습니다.🤩");
}

Kakao.Link.createCustomButton({
  container: "#kakao-link-btn",
  templateId: 55537,
});
