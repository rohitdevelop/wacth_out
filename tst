@extends('layouts.master')

@section('content')
<section class="page-hero">
    <div class="page-hero-bg"
        style="background-image:url('{{ asset('assets/images/cholangiocarcinoma/Banner.jpg') }}')"></div>

    <div class="container">
        <div class="page-hero-content">
            <h1>Prostate Cancer Treatment in India</h1>
            <p>
At The Onco Clinic, Prostate Cancer Treatment in India is all about early detection, accurate diagnosis, and the latest treatment techniques. Our doctors give individual attention to block cancer and, at the same time, keep the patient's life comfortable.
            </p>
        </div>
    </div>
</section>

<!-- Our Doctors -->
@include('include_doctors')
<!-- Our Doctors End -->

<section class="service-form-section py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 order-1 service-text">
                <h2>The Onco Clinic – Best Prostate Cancer Clinic in India</h2>

                <p>
The Onco Clinic is the place where men suffering from prostate cancer get comprehensive help. We have a team of Urologists, Medical Oncologists, and Radiation Specialists who are experienced in the field. They, along with support staff, work by first determining the stage of the cancer, then the patient's age and overall health, to make the treatment plan.


                </p>
                <p>
                  
Advanced diagnostic tools, regular PSA screenings, and the most modern surgical techniques, including robotic prostatectomy, as well as hormone therapy, chemotherapy, and targeted treatments, are all accessible in one location. The patients receive thorough explanations, emotional assistance, and regular phone follow-up during their treatment period. Through its ethical standards, modern facilities, and patient-centered approach, The Onco Clinic has gained the trust of being one of the premier Prostate Cancer Clinics in India and has thus emerged as a safe and effective provider of prostate cancer treatment.
                </p>
            </div>


            <!-- FORM (always second) -->
            <div class="col-lg-5 order-2">
                @include('form')
            </div>

        </div>
    </div>
</section>

<section class="info-center-section">
    <div class="container">
        <h2>What Is Prostate Cancer?</h2>

        <p>
 Prostate cancer occurs when the prostate gland, which is a small gland in males that produces seminal fluid, undergoes excessive growth of cancerous cells. The disease is among the top cancers in men, particularly those aged 50 and older.

        </p>
        <p>
In a good number of cases, prostate cancer is the slow-growing type, and its presence may not even be felt during the initial stages. However, some types of the disease are very aggressive and can double their size in no time while swiftly moving to other areas of the body. Regular screening for prostate cancer remains the most important factor in winning the battle against the disease in India, where the disease is still common. The reason is that it gives rise to more treatment choices and favorable outcomes. Consistent with proper identification and timely medical help, plenty of men go on to live prosperous and long lives after therapy.

        </p>
    </div>
</section>
<section class="types-cancer-section">
    <div class="container">
        <div class="types-cancer-grid">

            <!-- LEFT CONTENT -->
            <div class="types-cancer-text">
                <h2>Types of Prostate Cancer</h2>
                <ul class="check-list">
                    <li>
                        <strong>Adenocarcinoma:</strong>
                        The most common type of prostate cancer, starting in the gland cells that produce prostate fluid.
                    </li>

                    <li>
                        <strong>Acinar adenocarcinoma:</strong>
                        A common subtype of adenocarcinoma, found in the majority of prostate cancer cases.
                    </li>

                    <li>
                        <strong>Ductal adenocarcinoma:</strong>
                        A less common but faster-growing form that may behave more aggressively.
                    </li>

                    <li>
                        <strong>Small cell carcinoma:</strong>
                        A rare and highly aggressive type that usually spreads quickly.
                    </li>

                    <li>
                        <strong>Transitional cell carcinoma:</strong>
                        Begins in the cells lining the urethra and may involve the prostate.
                    </li>

                    <p>
                        Identifying the type helps doctors plan accurate Prostate Cancer Treatment in India.
                    </p>
                </ul>
            </div>

            <!-- RIGHT IMAGE -->
            <div class="types-cancer-image">
                <img src="https://dummyimage.com/900x600/0000/ffff" alt="Types of Pancreatic Cancer">
            </div>

        </div>
    </div>
</section>




<section class="symptoms-section">
    <div class="container">
        <div class="symptoms-grid">

            <div class="symptoms-text">
                <h2>Symptoms of Prostate Cancer</h2>
              
                <ul>
                  <li>Desire to urinate often, especially at night.</li>

    <li>Blood seen in urine or sometimes in semen.</li>

    <li>Urine flow that is weak or has breaks during urination.</li>

    <li>Discomfort or ache in the lower back, hip, or pelvic areas.</li>

    <li>Difficulty starting urination or having the impression that the bladder still holds urine.</li>

    <li>Sensation of burning or pain during urination.</li>

    <li>Erectile or sexual problems in advanced stages.</li>


                </ul>

                <p>
       Spotting these symptoms early gives the chance of Prostate Cancer Treatment in India promptly, and increases recovery chances.
                </p>
            </div>

            <div class="symptoms-image">
                <img src="{{ asset('assets/images/cholangiocarcinoma/Symptoms.jpg') }}" alt="Lung Cancer Consultation">
            </div>

        </div>
    </div>
</section>
<section class="causes-feature-section">
    <div class="container">

        <div class="section-head">
            <h2>Causes & Risk Factors</h2>
        </div>

        <div class="feature-grid">
            <div class="feature-image">
                <img src="{{ asset('assets/images/cholangiocarcinoma/Causes & Risk.jpg') }}" alt="Skin Cancer Causes">
            </div>

            <div class="feature-list">

                <div class="feature-item">
                    <span class="icon">✔</span>
                    <div>
                        <p>Growing older, mainly after the age of 50, makes it more likely to get prostate cancer.</p>
                    </div>
                </div>

                <div class="feature-item">
                    <span class="icon">✔</span>
                    <div>
                        <p>A family member having prostate cancer is a factor that increases the risk.</p>
                    </div>
                </div>

                <div class="feature-item">
                    <span class="icon">✔</span>
                    <div>
                        <p>Some alterations in the genes, among which are the mutations of the BRCA gene, may increase the risk of developing the condition.</p>
                    </div>
                </div>

                <div class="feature-item">
                    <span class="icon">✔</span>
                    <div>
                        <p>Obesity and lack of physical activity are two interrelated risk factors.</p>
                    </div>
                </div>

                <div class="feature-item">
                    <span class="icon">✔</span>
                    <div>
                        <p>Long-term consumption of unhealthy or processed foods.</p>
                    </div>
                </div>

                <div class="feature-item">
                    <span class="icon">✔</span>
                    <div>
                        <p>Hormonal factors related to the levels of testosterone.</p>
                    </div>
                </div>

                <div class="feature-item">
                    <span class="icon">✔</span>
                    <div>
                        <p>Prostate cancer is a higher possibility in men of African descent.</p>
                    </div>
                </div>

                <p style="color:#000;">
                    The awareness of these risk factors enables doctors to develop efficient Prostate Cancer Treatment in India and to carry out early detection.
                </p>

            </div>
        </div>
    </div>
</section>


<section class="breast-slider-section">
    <div class="container">
        <h2 class="section-title">
           Prostate Cancer Treatment Options at The Onco Clinic
        </h2>

        <div class="swiper breastSwiper">
            <div class="swiper-wrapper">

                <!-- Card 1 -->
                <div class="swiper-slide">
                    <div class="treatment-card">
                        <img src="https://dummyimage.com/400x350/000/fff" alt="">
                        <h4>Active Surveillance</h4>
                        <p>
                            Active surveillance means that the patient will undergo frequent PSA tests, imaging, and physical examination to keep track of prostate cancer, which is not going to be treated unless it becomes progressive.
                        </p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="swiper-slide">
                    <div class="treatment-card">
                        <img src="https://dummyimage.com/400x350/000/fff" alt="">
                        <h4>Surgery (Radical Prostatectomy)</h4>
                        <p>
                            Radical prostatectomy is a common surgical method that removes the complete prostate gland, making the patient cancer-free if he is fit to undergo surgery for localized prostate cancer.
                        </p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="swiper-slide">
                    <div class="treatment-card">
                        <img src="https://dummyimage.com/400x350/000/fff" alt="">
                        <h4>Hormone Therapy (ADT)</h4>
                        <p>
                            Hormone treatment is done to drastically decrease the body's testosterone level to an extent where the prostate cancer cells will not be able to grow or will be stopped.
                        </p>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="swiper-slide">
                    <div class="treatment-card">
                        <img src="https://dummyimage.com/400x350/000/fff" alt="">
                        <h4>Chemotherapy</h4>
                        <p>
                            Chemotherapy uses anticancer drugs to kill cancer cells in the prostate and is mainly considered for cases of advanced or hormone-resistant prostate cancer.
                        </p>
                    </div>
                </div>

                <!-- Card 5 -->
                <div class="swiper-slide">
                    <div class="treatment-card">
                        <img src="https://dummyimage.com/400x350/000/fff" alt="">
                        <h4>Targeted Therapy & Immunotherapy</h4>
                        <p>
                            These treatments focus on specific signals in cancer cells or stimulate the immune system to control advanced prostate cancer more effectively.
                        </p>
                    </div>
                </div>

            </div>

            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>


<section class="info-center-section" style="background: #fff;">
    <div class="container">
        <h2 style="color:#000">Diagnosis of Prostate Cancer at The Onco Clinic</h2>

<p style="color:#000;">Physicians generally start the process with a PSA blood test to identify abnormal levels in the prostate.</p>

<p style="color:#000;">A digital rectal examination provides information about the prostate's size and texture.</p>

<p style="color:#000;">Multiparametric MRI generates comprehensive images of the area and can highlight the presence of anything suspicious.</p>

<p style="color:#000;">If cancer is suspected, a prostate biopsy will be done for a definitive diagnosis.</p>

<p style="color:#000;">The Gleason score indicates how aggressive the tumor is.</p>

<p style="color:#000;">CT or bone scans can be ordered to evaluate possible metastasis of cancer.</p>

        
        
        <p style="color:#000">
This meticulous probe guarantees precise diagnosis prior to commencing Prostate Cancer Treatment in India.
</p>

    </div>
</section>
<section class="cost-section-dark bg-white">
    <div class="container">
        <div class="cost-head text-center">
            <h2 style="color: #000;">Cost of Prostate Cancer Treatment in India</h2>
        </div>

        <div class="cost-grid">
            <div class="cost-list">

                <div class="cost-item">
                    <span class="check">✔</span>
                    <div style="color: #000;">
                       Diagnostic tests range from ₹10,000 to ₹30,000.
                    </div>
                </div>

                <div class="cost-item">
                    <span class="check">✔</span>
                    <div style="color: #000;">
                      The cost of surgery is determined by the method applied.
                    </div>
                </div>

                <div class="cost-item">
                    <span class="check">✔</span>
                    <div style="color: #000;">
                      The price for hormone therapy is based on the length of the treatment.
                    </div>
                </div>

                <div class="cost-item">
                    <span class="check">✔</span>
                    <div style="color: #000;">
                     The costs of chemotherapy and targeted therapy are different.
                    </div>
                </div>

                <div class="cost-item">
                    <span class="check">✔</span>
                    <div style="color: #000;">
                       The overall cost is increased by follow-up and monitoring.
                    </div>
                </div>

                <div class="cost-item">
                    <span class="check">✔</span>
                    <div style="color: #000;">
                       Prostate Cancer Treatment Cost in India is determined by the stage of cancer and the chosen treatment plan.
                    </div>
                </div>

                <p style="color: #000;">
                    The Onco Clinic offers honest and tailored cost advice.
                </p>

            </div>

            <div class="cost-image">
                <img src="{{ asset('assets/images/cholangiocarcinoma/Cost.jpg') }}" alt="Cost of Prostate Cancer Treatment">
            </div>

        </div>
    </div>
</section>

<section class="info-center-section" style="background: #1f507b;">
    <div class="container">
        <h2 style="color:#fff">Recovery & Follow-Up Care</h2>

    <p style="color:#fff;">Infection prevention and proper healing were guaranteed through careful observation of the surgical site.</p>

<p style="color:#fff;">The resuming of activities was done according to the progress in recovery.</p>

<p style="color:#fff;">PSA tests were done regularly to monitor the response to treatment and to catch any occurrence at an early stage.</p>

<p style="color:#fff;">Help was given to deal with urinary control or sexual health issues.</p>

<p style="color:#fff;">Hormone levels and bone health were being watched, especially in the case of hormone therapy.</p>

<p style="color:#fff;">Counseling and support were provided to the patients for the emotional and psychological aspects of the treatment.</p>

<p style="color:#fff;">Patients were provided with the guidance of a healthy diet, exercise, and lifestyle habits.</p>



        <p style="color:#fff">
  Regular follow-up plays an important role in improving long-term Prostate Cancer Treatment in India outcomes.
        </p>
    </div>
</section>



 

<section class="onc-why-section py-5 bg-white">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 order-2 order-lg-1 onc-why-text">
                <h2 style="color:#000;">Why Choose The Onco Clinic for Prostate Cancer Treatment in India?</h2>

                <p style="color:#000;">
       The Onco Clinic is the most reliable place in India for getting Prostate Cancer Treatment done comprehensively with a major emphasis on precision, safety, and quality. Our skilled doctors apply the latest methods of diagnosing and treating patients, for instance, robotic surgery and targeted therapies.
                </p>

                <p style="color:#000;">
Patient documentation and processing are computerized, which facilitates proper communication within the access layer, giving rise to timely and cost-effective diagnosis and treatment plans. The treatment plan is specially designed according to the patient’s need followed by continuous support and clear communication. The Onco Clinic has the most modern of the methods, the most professional staff, and also the most humane practices, and thus has built up the reputation of being a Prostate Cancer Clinic in India where cancer care is both effective and patient-centered.

                </p>
            </div>


            <div class="col-lg-5 order-1 order-lg-2 onc-why-form">
                @include('form')
            </div>

        </div>
    </div>
</section>


<section class="faq-clean-section">
    <div class="container">
        <h2 class="faq-title">FAQs About Prostate Cancer Treatment & The Onco Clinic</h2>

        <div class="faq-clean-item">
            <button class="faq-clean-toggle">
                What is the first sign of prostate cancer?
                <span class="icon">+</span>
            </button>
            <div class="faq-clean-content">
                For a lot of men, the earliest stage of prostate cancer does not present any noticeable symptoms. However, once symptoms appear, trouble urinating and frequent urination at night are usually the first ones to be noticed.
            </div>
        </div>

        <div class="faq-clean-item">
            <button class="faq-clean-toggle">
                Is prostate cancer curable?
                <span class="icon">+</span>
            </button>
            <div class="faq-clean-content">
                Prostate cancer is very often curable when diagnosed early. Many patients who get timely Prostate Cancer Treatment in India respond well to the treatment and later on have long and healthy lives.
            </div>
        </div>

        <div class="faq-clean-item">
            <button class="faq-clean-toggle">
                How safe is robotic prostate removal?
                <span class="icon">+</span>
            </button>
            <div class="faq-clean-content">
                Robotic prostatectomy is among the safest surgical procedures. The surgeons' precision and control are such that pain, recovery duration, and even urinary and sexual functions can be handled better than ever.
            </div>
        </div>

        <div class="faq-clean-item">
            <button class="faq-clean-toggle">
                How often should PSA be checked?
                <span class="icon">+</span>
            </button>
            <div class="faq-clean-content">
                Typically, men over 50 are recommended to get a PSA test done every year. Individuals with a family history or those at higher risk may need to be tested sooner or have more frequent tests.
            </div>
        </div>

        <div class="faq-clean-item">
            <button class="faq-clean-toggle">
                Does prostate cancer affect sexual function?
                <span class="icon">+</span>
            </button>
            <div class="faq-clean-content">
                There are treatment methods that may cause a short-term effect on sexual function. Despite that, advanced surgical procedures, medicine, and therapy assistance can eventually render the sexual health of many men either recovered or improved.
            </div>
        </div>

    </div>
</section>





<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<script>
var swiper = new Swiper(".breastSwiper", {
    loop: true,
    spaceBetween: 30,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    slidesPerView: 3,

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
</script>


@endsection