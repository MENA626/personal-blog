window.PORTFOLIO_ARTICLES = [
  {
    "id": "rag-explained",
    "motif": "AI",
    "sources": [["Microsoft Learn · RAG overview","https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"],["Microsoft Learn · RAG evaluation","https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators"],["OWASP · Prompt injection risks","https://genai.owasp.org/llmrisk/llm01-prompt-injection/"]],
    "image": "assets/article-rag.svg",
    "ar": {
      "category": "الذكاء الاصطناعي · مقال تقني",
      "title": "حين تتعلّم الآلة أن تبحث قبل أن تجيب.",
      "description": "شرح عملي لفكرة RAG: من تجهيز الوثائق والبحث الدلالي إلى صياغة إجابة موثّقة وتقييم جودتها.",
      "content": [
        "حين نطرح سؤالًا على نموذج لغوي، فقد نحصل على إجابة تبدو واثقة ومقنعة، لكن الطلاقة لا تعني بالضرورة أن المعلومة صحيحة أو حديثة. لهذا أرى أن السؤال الأهم عند بناء تطبيق يعتمد على الذكاء الاصطناعي ليس: هل يستطيع النموذج الإجابة؟ بل: من أين جاءت إجابته، وكيف يمكن التحقق منها؟",
        "هنا تأتي فكرة التوليد المعزّز بالاسترجاع، أو Retrieval-Augmented Generation (RAG). بدل الاعتماد فقط على المعرفة التي تعلّمها النموذج أثناء تدريبه، يبحث النظام أولًا في مصادر محددة وملائمة للسؤال، ثم يزوّد النموذج بالمقاطع المسترجعة ليبني إجابته على سياق يمكن الرجوع إليه. هذه الطريقة قد تحسّن صلة الإجابات بالمصادر، لكنها لا تضمن الدقة وحدها.",
        "تبدأ العملية قبل وصول أي سؤال. تُجمع الوثائق المصرّح باستخدامها، ويُستخرج نصّها، ثم يُنظّف قدر الإمكان من التكرارات والتنسيقات المربكة. وإذا كانت الوثائق صورًا أو صفحات ممسوحة ضوئيًا، فقد نحتاج إلى OCR لتحويلها إلى نص. في هذه المرحلة لا يكفي استخراج الكلمات؛ من المهم الاحتفاظ بعنوان المستند ورقم الصفحة وتاريخه وصلاحيات الوصول إليه.",
        "بعد ذلك تُقسّم المستندات إلى مقاطع صغيرة نسبيًا تُسمّى Chunks. التقسيم العشوائي قد يفصل التعريف عن شرحه أو الاستثناء عن القاعدة، ولذلك أفضّل التفكير في بنية المحتوى: العناوين والفقرات والمواد المرتبطة. حجم المقطع ليس رقمًا سحريًا واحدًا؛ بل قرار نختبر أثره في جودة نتائج البحث.",
        "للبحث عن المقاطع المناسبة يمكن استخدام البحث بالكلمات المفتاحية أو البحث الدلالي الذي يعتمد على Embeddings، وهي تمثيلات عددية للنصوص تساعد في تقدير التشابه بين المعاني. الجمع بين الطريقتين في بحث هجين قد يكون مفيدًا، خصوصًا عندما يتضمن السؤال أسماء محددة أو أرقام مواد أو مصطلحات دقيقة.",
        "عندما يصل سؤال المستخدم، يسترجع النظام مجموعة من المقاطع ذات الصلة. ويمكن إعادة ترتيب هذه النتائج قبل إرسالها إلى النموذج. ثم تُصاغ تعليمات واضحة: أجب استنادًا إلى المعلومات المتاحة، أظهر المراجع، وصرّح بعدم كفاية الأدلة عندما لا يجد النظام ما يدعم الإجابة. ذكر المصدر ينبغي أن يشير إلى الوثيقة أو الجزء الذي استُخدم فعلًا، لا إلى رابط عام لا يثبت الكلام.",
        "أما التقييم فلا ينبغي أن يتوقف عند جمال الأسلوب. أختبر جودة الاسترجاع أولًا: هل وصلت المقاطع الصحيحة إلى النظام؟ ثم أراجع الإجابة: هل استندت إلى هذه المقاطع؟ هل تجاهلت معلومات متعارضة؟ وهل كانت الإحالات صحيحة؟ قد تكون المشكلة في البحث، لا في النموذج اللغوي نفسه.",
        "هناك جانب آخر لا يقل أهمية: الأمان والخصوصية. فالمستندات المسترجعة تُعامل باعتبارها بيانات غير موثوقة من ناحية التعليمات، ويجب ألا يسمح النظام لنص داخل وثيقة بأن يغيّر صلاحيات التطبيق. كذلك ينبغي تطبيق التحقق من الصلاحيات قبل الاسترجاع، وعدم إرسال مستندات سرية إلى مستخدم غير مخوّل.",
        "خلاصة فكرتي أن RAG ليس مجرد «إضافة قاعدة بيانات إلى الذكاء الاصطناعي»؛ بل سلسلة من قرارات إعداد المعرفة والبحث والتوثيق والاختبار. نجاحه يظهر عندما يقدم إجابة مفيدة، ويستطيع المستخدم فهم أساسها وحدودها، لا عندما يجيب بثقة عن كل شيء."
      ]
    },
    "en": {
      "category": "Artificial intelligence · Technical article",
      "title": "When AI searches before it answers.",
      "description": "A practical guide to RAG: preparing documents, retrieval, grounded generation, and evaluation.",
      "content": [
        "Language models can produce fluent answers, but fluency does not prove accuracy. When building AI products, I think the more useful question is where an answer comes from and how a reader can verify it.",
        "Retrieval-Augmented Generation (RAG) combines searching an approved knowledge source with response generation. Relevant passages are retrieved and passed to the language model as context. This can improve grounding, but it does not eliminate errors.",
        "Before users ask questions, documents need to be collected, text extracted, and source metadata preserved. Scanned documents may require OCR. Good metadata includes titles, page numbers, versions, and access permissions.",
        "Documents are split into chunks. Splitting must respect meaning: cutting an exception away from its rule can create misleading retrieval. Chunk size and overlap should be tested rather than treated as fixed universal settings.",
        "Retrieval may rely on keywords, vector embeddings, or hybrid search. Keyword methods can capture exact names and identifiers; semantic search is helpful when different words express similar meanings. Reranking can improve the final selection.",
        "The generation step should ask the model to rely on retrieved evidence, cite the right passages, and state when the context is insufficient. Evaluation should separately examine retrieval quality, answer groundedness, and citation accuracy.",
        "Security belongs in the design: retrieved text is untrusted content, not a source of new system instructions. Permission checks must happen before information is provided to the model.",
        "For me, the point of RAG is not simply getting an answer. It is building a verifiable path from a question to the underlying evidence."
      ]
    }
  },
  {
    "id": "mizan-vision",
    "motif": "◈",
    "sources": [["Microsoft Learn · Retrieval and source grounding","https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"],["OWASP · LLM security risks","https://owasp.org/projects/top-10-for-large-language-model-applications"]],
    "image": "assets/article-legaltech.svg",
    "ar": {
      "category": "التقنية القانونية · مقال تحليلي",
      "title": "عندما تلتقي العدالة بالتقنية.",
      "description": "كيف يساعد التنظيم الرقمي وOCR والبحث الذكي في إدارة الوثائق القانونية، وما حدود الاعتماد على الذكاء الاصطناعي؟",
      "content": [
        "في المجالات التي تعتمد على المستندات، قد يصبح الوصول إلى المعلومة الصحيحة تحديًا بحد ذاته. لا أتحدث هنا عن نقص في البيانات، بل عن كثرتها وتشتتها بين ملفات وصيغ وتواريخ مختلفة. والقطاع القانوني مثال واضح على أهمية الدقة في حفظ المعلومة واستعادتها.",
        "من هذه الزاوية أنظر إلى التقنية القانونية LegalTech: ليست محاولة لاستبدال المتخصص القانوني بواجهة إلكترونية، وإنما تصميم أدوات تخفف الأعمال المتكررة وتساعد على ترتيب البيانات وفهم ما هو متاح منها. وحتى الأداة البسيطة قد تكون ذات قيمة عندما تقلل الوقت اللازم للعثور على مستند محدد.",
        "الخطوة الأولى غالبًا هي إدارة الوثائق. يحتاج الملف إلى اسم مفهوم، ونوع، وتاريخ، ومالك، ومستوى صلاحية. ويجب أن يكون من السهل البحث عنه ومعرفة نسخته الأحدث بدل التنقل بين نسخ متشابهة يصعب التمييز بينها. تنظيم هذه التفاصيل أساس عملي قبل إضافة أي ذكاء اصطناعي.",
        "يمكن لتقنية التعرف الضوئي على الحروف OCR تحويل النص الموجود في الصور والملفات الممسوحة ضوئيًا إلى محتوى قابل للبحث. لكنها ليست معصومة: فقد تخطئ مع جودة تصوير منخفضة، أو صفحات مائلة، أو نصوص عربية معقدة. لذلك تظل مراجعة النص المستخرج ضرورية، خاصة عندما يتعلق الأمر بالأسماء والأرقام والمواد القانونية.",
        "بعد تجهيز المستندات يمكن بناء بحث تقليدي أو دلالي يسهل الوصول إلى الفقرات ذات الصلة. وقد يضاف نظام RAG لصياغة تلخيصات أو إجابات مدعومة بمقاطع من وثائق مسموح بالاطلاع عليها. ومع ذلك لا بد من إظهار المصدر وتاريخه، والتمييز بين النص الأصلي والاستنتاج الذي ينتجه النموذج.",
        "التصميم الجيد في هذا المجال يبدأ بالخصوصية. المستندات قد تحتوي بيانات شخصية أو معلومات حساسة، ولهذا ينبغي التفكير في التحكم في الوصول، وتشفير البيانات عند الحاجة، وسجل العمليات، وسياسة الاحتفاظ والحذف. لا يصح أن تتحول سهولة البحث إلى وسيلة لعرض وثائق لا يملك المستخدم حق الوصول إليها.",
        "هناك أيضًا جانب يتعلق بثقة المستخدم. ينبغي أن تشرح الواجهة بوضوح ما إذا كانت المعلومة مستخرجة من مستند، أو ملخصة آليًا، أو تحتاج إلى مراجعة. وعندما تكون الإجابة غير مؤكدة، فالاعتراف بعدم اليقين جزء من جودة المنتج لا عيب فيه.",
        "هذا النوع من التفكير هو ما يجذبني إلى تقاطع البرمجة مع الأدوات القانونية: تحويل الإجراءات المعقدة إلى خطوات أوضح من دون التضحية بالدقة والخصوصية. التقنية هنا وسيلة مساعدة لاتخاذ قرار أفضل، وليست مصدرًا مستقلًا للحكم القانوني.",
        "في النهاية، قيمة الحل القانوني الرقمي لا تُقاس بعدد المميزات في واجهته، بل بقدرته على تنظيم العمل، وحماية المعلومات، وتقديم نتائج قابلة للتحقق. وأي إجابة يولدها نظام ذكاء اصطناعي في هذا السياق تحتاج إلى مراجعة مختص مؤهل قبل الاعتماد عليها في قرار قانوني."
      ]
    },
    "en": {
      "category": "Legal technology · Analysis",
      "title": "When legal work meets technology.",
      "description": "Document organization, OCR, intelligent search, and the limits of legal AI.",
      "content": [
        "Legal work often involves a substantial volume of documents, versions, dates, and sensitive information. Finding the correct source is sometimes as important as reading it.",
        "I see LegalTech as a way to support professional work, not replace professional judgment. Digital document organization, access controls, and reliable search can reduce repetitive effort.",
        "Meaningful organization starts with metadata: document type, date, owner, version, and permissions. When scanned files are involved, OCR can make text searchable, although extraction errors must be reviewed carefully.",
        "Search can be keyword-based or semantic, and an appropriately designed RAG system can use retrieved material to support summaries. An answer should distinguish source quotations from generated interpretation and provide traceable references.",
        "Privacy is essential. Sensitive documents require suitable access controls, retention policies, and appropriate security measures. Search convenience must never override a user's permissions.",
        "Interfaces should communicate uncertainty and give readers a way to inspect their sources. Legal AI output should not be relied upon as a substitute for review by a qualified legal professional.",
        "Ultimately, a useful legal technology product succeeds through clarity, verifiability, and respect for the people and information it serves."
      ]
    }
  },
  {
    "id": "architecture-matters",
    "motif": "{ }",
    "sources": [["NIST · Developer verification guidance","https://www.nist.gov/publications/guidelines-minimum-standards-developer-verification-software"]],
    "image": "assets/article-engineering.svg",
    "ar": {
      "category": "هندسة البرمجيات · مقال تقني",
      "title": "أن يعمل الكود؟ هذه مجرد البداية.",
      "description": "لماذا لا تكفي النتيجة الصحيحة وحدها، وكيف تجعل المعمارية والاختبارات والتوثيق البرنامج أسهل في التغيير؟",
      "content": [
        "عندما أنتهي من كتابة جزء برمجي وأراه يعمل كما توقعت، أشعر بأنني حققت خطوة مهمة. لكنني أعتقد أن السؤال التالي هو الأهم: هل يمكنني فهم هذا الجزء بعد أشهر؟ وهل يستطيع شخص آخر تعديله من دون أن يتسبب في أعطال غير متوقعة؟ هنا تبدأ هندسة البرمجيات بمعناها الأوسع.",
        "يمكن كتابة وظيفتين تعطيان النتيجة نفسها، لكن واحدة منهما أوضح وأسهل اختبارًا وتعديلًا. لهذا لا أقيس جودة الحل بعدد الأسطر أو سرعة الانتهاء منه فقط، بل بوضوح مسؤوليته، ومدى اعتماده على مكونات أخرى، وما إذا كانت حالات الخطأ مأخوذة في الحسبان.",
        "أول مبدأ أعود إليه هو فصل المسؤوليات. واجهة المستخدم تهتم بالعرض والتفاعل، ومنطق العمل يعالج القواعد الأساسية، وطبقة الوصول إلى البيانات تتعامل مع التخزين والاسترجاع. ليس من الضروري أن يمتلك كل مشروع طبقات كثيرة؛ المهم ألا تتداخل المهام بطريقة تجعل تعديل تفصيلة صغيرة يتطلب تغيير أجزاء متباعدة.",
        "تسمية المتغيرات والدوال جزء من التصميم كذلك. الاسم الجيد يشرح المقصود قبل قراءة التنفيذ، بينما قد يفرض الاسم الغامض على من يقرأ الكود أن يعيد استنتاج الفكرة من الصفر. وأحاول أن أجعل الدالة مسؤولة عن سلوك واضح، وأن أكتب التعليق عندما يشرح السبب أو القيد، لا عندما يكرر ما يظهر في السطر.",
        "ثم تأتي الاختبارات. اختبارات الوحدات تفحص أجزاء صغيرة من المنطق، واختبارات التكامل تتحقق من تعاون المكونات، أما الاختبارات الشاملة فتفحص مسار المستخدم الأساسي. لا يعني وجود اختبارات كثيرة بالضرورة وجود تغطية جيدة؛ فالأهم أن تختبر السلوك المتوقع والحدود والأخطاء التي قد تحدث فعلًا.",
        "من المفيد أيضًا التفكير في ما يحدث عندما تفشل الأمور: اتصال شبكة ينقطع، طلب يتكرر، إدخال غير صالح، أو خدمة خارجية تتأخر. الرسائل الواضحة، والتحقق من المدخلات، وتسجيل الأخطاء من دون كشف بيانات حساسة، تجعل المشكلة أسهل في التشخيص قبل أن تتحول إلى تجربة سيئة للمستخدم.",
        "لا أفصل الأمن عن الجودة. التحقق من الصلاحيات على الخادم، وإدارة الأسرار بعيدًا عن الشفرة المنشورة، وتحديث الاعتماديات، ومراجعة المدخلات والمخرجات أمور ينبغي أن تدخل في التطوير منذ البداية. الجميل في التطبيق لا يعوض ثغرة تكشف بيانات المستخدمين.",
        "أرى أن التوثيق الجيد ليس ملفًا طويلًا بلا فائدة، بل شرحًا مختصرًا لتشغيل المشروع، ومتطلباته، وطريقة التعامل مع الإعدادات الأساسية وقرارات التصميم غير البديهية. ومن المهم أيضًا تسجيل ما تغيّر، لأن المعرفة غير المكتوبة تضيع بسهولة.",
        "في المشاريع الصغيرة لا أنصح بتعقيد معماري مبكر. يمكن البدء ببنية بسيطة، ثم إعادة تنظيمها عندما تكشف المتطلبات حاجة حقيقية إلى ذلك. التوازن مطلوب: لا نريد كودًا صعب الصيانة، ولا نريد قضاء الوقت في بناء طبقات لا يقدم وجودها فائدة.",
        "في النهاية، الكود الذي يعمل هو البداية الصحيحة، لكنه ليس خط النهاية. جودة البرنامج تظهر في وضوحه، وثبات سلوكه، وسهولة اختباره، وأمانه، واستعداده للتغيّر. هذه التفاصيل قد لا يراها المستخدم مباشرة، لكنه يشعر بأثرها مع كل تجربة سلسة وموثوقة."
      ]
    },
    "en": {
      "category": "Software engineering · Technical article",
      "title": "Working code is only the beginning.",
      "description": "What architecture, testing, documentation, and maintainability add to a working feature.",
      "content": [
        "A feature that works is a milestone, but it is not the final measure of software quality. I also ask whether it will be understandable and safe to modify months later.",
        "Clear responsibilities are a practical starting point. Presentation code, business logic, and data access can be separated where that separation helps, without forcing excessive architecture onto a small project.",
        "Names and interfaces matter. A clear function name communicates intent, while well-defined boundaries reduce the number of places affected by one change.",
        "Testing provides another layer of confidence. Unit tests check small behaviors, integration tests examine collaboration between components, and end-to-end tests validate important user flows. Testing edge cases and failures is as important as checking the happy path.",
        "Quality includes resilience. Systems should handle invalid input, network failures, retries, and external-service delays predictably. Useful error reporting should never expose sensitive information.",
        "Security must be integrated into the work: server-side permission checks, careful input validation, dependency management, and appropriate secret handling.",
        "Documentation should explain how to run the project and why important design decisions were made. It does not need to be lengthy to be useful.",
        "I prefer to begin simply and refactor when real requirements justify additional complexity. The goal is not maximum abstraction, but software that remains understandable and maintainable as it changes."
      ]
    }
  }
];
