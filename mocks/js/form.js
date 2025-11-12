$(function () {
    let currentStep = 1;
    const totalSteps = 9;
    const $form = $('#multiStepForm');
    const $steps = $form.find('.form-step');
    const $stepLists = $('.c-form__titleBox__stepList ul li');
    const $mainVisual = $('.p-mainVisual');

    function showStep(stepNumber) {
        $steps.hide();
        $steps.filter('[data-step="' + stepNumber + '"]').show();
        $stepLists.removeClass('is-current');
        $stepLists.eq(stepNumber - 1).addClass('is-current');
        currentStep = stepNumber;

        if (currentStep === 1) {
            $mainVisual.removeClass('is-hide');
        } else {
            $mainVisual.addClass('is-hide');
        }
    }

    function validateStep(stepNumber) {
        const $currentStep = $steps.filter('[data-step="' + stepNumber + '"]');
        let isValid = true;

        // 現在のステップ内の必須項目をチェック
        $currentStep.find('input[required], select[required]').each(function () {
            let isFieldValid = true;
            const name = $(this).attr('name');

            if ($(this).is(':radio')) {
                if ($(`input[name="${name}"]:checked`).length === 0) {
                    isFieldValid = false;
                }
            } else if ($(this).is(':checkbox')) {
                if (!$(this).is(':checked')) {
                    isFieldValid = false;
                }
            } else { // text, select, email, tel
                if (!$(this).val()) {
                    isFieldValid = false;
                }
            }

            if (!isFieldValid) {
                isValid = false;
            }
        });

        // name属性がないチェックボックスグループ（q2）の特別なバリデーション
        if (stepNumber === 2) {
            if ($currentStep.find('input[type="checkbox"]:checked').length === 0) {
                isValid = false;
            }
        }

        if (!isValid) {
            alert('この質問は必須です。');
        }
        return isValid;
    }

    function nextStep() {
        if (validateStep(currentStep) && currentStep < totalSteps) {
            showStep(currentStep + 1);
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            showStep(currentStep - 1);
        }
    }

    // --- イベントリスナー ---

    // ラジオボタン（選択したら即次へ）
    $('[data-step="1"] input[type="radio"], [data-step="3"] input[type="radio"], [data-step="4"] input[type="radio"], [data-step="5"] input[type="radio"]').on('click', function () {
        setTimeout(nextStep, 200);
    });

    // 「次へ」ボタン
    $('.button-next').on('click', function (e) {
        e.preventDefault();
        nextStep();
    });

    // 「戻る」ボタン
    $('.button-back').on('click', function (e) {
        e.preventDefault();
        prevStep();
    });

    // フォーム送信
    $form.on('submit', function (e) {
        e.preventDefault();
        if (validateStep(currentStep)) {
            window.location.href = 'lp_kaigo01-thanks.html';
        }
    });

    // 初期表示
    showStep(1);
});