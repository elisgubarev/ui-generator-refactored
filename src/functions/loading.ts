import $ from 'jquery';

export const loading = {
    start: () => {
        $('.js-image-spinner').removeClass('hidden');
        $('.js-loading-header').addClass('js-loading');
    },
    finish: () => {
        $('.js-image-spinner').addClass('hidden');
        $('.js-loading-header').removeClass('js-loading');
    }
};