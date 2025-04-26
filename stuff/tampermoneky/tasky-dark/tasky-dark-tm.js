// ==UserScript==
// @name         Tasky Dark
// @namespace    delta-tasky
// @version      2025-04-21
// @description  Dark theme part of the `Delta` plugin that makes the `Tasky` more customizable
// @author       Michael Soyka
// @match        https://*.tasky.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tasky.online
// @grant        GM_addStyle
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/Michael-Soyka/Michael-Soyka/refs/heads/main/stuff/tampermoneky/tasky-dark/tasky-dark-tm.js
// @downloadURL  https://raw.githubusercontent.com/Michael-Soyka/Michael-Soyka/refs/heads/main/stuff/tampermoneky/tasky-dark/tasky-dark-tm.js
// ==/UserScript==

const PLUGIN_PREFIX = 'delta';

GM_addStyle (`
    :root {
        --${PLUGIN_PREFIX}-background-main: #252526;
        --${PLUGIN_PREFIX}-background-second: #1e1e1e;
        --${PLUGIN_PREFIX}-text-main: #dfdfdf;
        --${PLUGIN_PREFIX}-text-second: #b8b8b8;
        --${PLUGIN_PREFIX}-border: #474747;
        --${PLUGIN_PREFIX}-border-second: #5f5f5f;

        --${PLUGIN_PREFIX}-overlay-main: #00000040;
        --${PLUGIN_PREFIX}-overlay-second: #00000080;

        --${PLUGIN_PREFIX}-blur-main: 8px;

        --${PLUGIN_PREFIX}-brand-color: #4c8bf7;

        /* -- -- -- -- -- -- -- -- -- -- -- -- */

        --${PLUGIN_PREFIX}-service-preloader-background: var( --${PLUGIN_PREFIX}-background-main );

        --${PLUGIN_PREFIX}-service-skeleton: var( --${PLUGIN_PREFIX}-background-main );

        --${PLUGIN_PREFIX}-service-user-list-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-service-user-list-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-service-user-list-input-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-service-user-list-input-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-service-user-list-input-hover-border: var( --${PLUGIN_PREFIX}-border-second );

        --${PLUGIN_PREFIX}-service-user-list-group-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-service-user-list-item-username: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-service-user-list-item-selected-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-service-date-picker-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-service-date-picker-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-service-date-picker-range-text: var( --${PLUGIN_PREFIX}-text-second );
        
        --${PLUGIN_PREFIX}-service-date-picker-range-selected-background: var( --${PLUGIN_PREFIX}-brand-color );
        --${PLUGIN_PREFIX}-service-date-picker-range-selected-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-service-date-picker-calendar-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-service-date-picker-calendar-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-service-date-picker-calendar-text: var( --${PLUGIN_PREFIX}-text-main );
        
        --${PLUGIN_PREFIX}-service-date-picker-calendar-date-range-background: var( --${PLUGIN_PREFIX}-background-second );
        
        --${PLUGIN_PREFIX}-service-date-picker-calendar-date-hover-color: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-service-date-picker-calendar-date-hover-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-service-date-picker-calendar-date-selected-background: var( --${PLUGIN_PREFIX}-brand-color );

        --${PLUGIN_PREFIX}-service-date-picker-calendar-date-off-month-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-service-date-picker-time-double-dots-color: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-service-date-picker-time-picker-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-service-date-picker-time-picker-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-service-options-menu-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-service-options-menu-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-service-options-menu-element-text: var( --${PLUGIN_PREFIX}-text-second );
        
        --${PLUGIN_PREFIX}-service-options-menu-element-hover-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-service-options-menu-element-hover-text: var( --${PLUGIN_PREFIX}-text-main );
        
        --${PLUGIN_PREFIX}-service-profile-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-service-profile-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-service-profile-info-title-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-service-profile-info-value-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-service-modal-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-service-modal-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-service-modal-top-title-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-service-modal-session-title-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-service-modal-account-adder-field-key-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-service-modal-account-adder-field-value-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-service-modal-account-adder-field-value-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-service-modal-account-adder-field-value-hover-border: var( --${PLUGIN_PREFIX}-border-second );
        


        --${PLUGIN_PREFIX}-left-menu-logo-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-left-menu-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-left-menu-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-left-menu-navigation-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-left-menu-navigation-active-background: var( --${PLUGIN_PREFIX}-background-second );
        
        --${PLUGIN_PREFIX}-left-menu-projects-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-left-menu-projects-active-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-left-menu-current-task-timer-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-left-menu-current-task-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-left-menu-current-task-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-left-menu-current-task-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-left-menu-profile-user-name-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-left-menu-profile-account-name-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-left-menu-profile-menu-background: var( --${PLUGIN_PREFIX}-background-main );

        --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-role-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-background: var( --${PLUGIN_PREFIX}-background-second );
        
        --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-title-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-info-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-domain-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-id-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-left-menu-profile-menu-nav-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-left-menu-profile-menu-nav-hover-text: var( --${PLUGIN_PREFIX}-text-main );



        --${PLUGIN_PREFIX}-right-area-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-right-area-title-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-title-count: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-filter-button-active-background: var( --${PLUGIN_PREFIX}-overlay-main );

        --${PLUGIN_PREFIX}-right-area-filter-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-filter-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-filter-presets-tab-text: var( --${PLUGIN_PREFIX}-text-second );
        
        --${PLUGIN_PREFIX}-right-area-filter-presets-tab-active-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-title: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-hover-border: var( --${PLUGIN_PREFIX}-border-second );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-empty: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-non-empty: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-search-background: var( --${PLUGIN_PREFIX}-overlay-main );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-search-color: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-result-title: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-result-item-selected-background: var( --${PLUGIN_PREFIX}-overlay-main );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-result-item-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-result-item-selected-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-status-list-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-status-list-border: var( --${PLUGIN_PREFIX}-border );
        
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-status-list-item-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-status-list-item-selected-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-status-list-item-selected-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-footer-save-template-button-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-footer-save-template-button-hover-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-footer-save-template-button-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-footer-save-template-button-border: var( --${PLUGIN_PREFIX}-border );



        --${PLUGIN_PREFIX}-right-area-search-background: var( --${PLUGIN_PREFIX}-overlay-main );
        --${PLUGIN_PREFIX}-right-area-search-hover-border: var( --${PLUGIN_PREFIX}-border-second );
        --${PLUGIN_PREFIX}-right-area-search-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-search-input-text: var( --${PLUGIN_PREFIX}-text-main );
        
        --${PLUGIN_PREFIX}-right-area-search-result-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-search-result-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-search-result-section-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-right-area-search-result-category-item-add-button-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-search-result-category-item-add-button-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-search-result-category-item-add-button-hover-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-search-result-category-item-add-button-hover-border: var( --${PLUGIN_PREFIX}-border-second );

        --${PLUGIN_PREFIX}-right-area-search-result-category-tasks-item-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-search-result-category-tasks-responsible-username: var( --${PLUGIN_PREFIX}-text-main );
        
        --${PLUGIN_PREFIX}-right-area-search-result-category-comments-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-search-result-category-comments-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-search-result-category-comments-task-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-search-result-category-comments-creation-date-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-search-result-category-files-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-search-result-category-files-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-search-result-category-files-task-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-search-result-category-files-creation-date-text: var( --${PLUGIN_PREFIX}-text-main );



        --${PLUGIN_PREFIX}-right-area-tasks-list-head-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-button-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-button-hover-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-button-hover-background: var( --${PLUGIN_PREFIX}-background-main );

        --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-item-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-item-hover-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-item-hover-background: var( --${PLUGIN_PREFIX}-background-second );
        
        --${PLUGIN_PREFIX}-right-area-tasks-list-content-background: transparent;
        
        --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-background: var( --${PLUGIN_PREFIX}-overlay-main );
        --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-add-button-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-add-button-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-add-button-hover-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-add-button-hover-border: var( --${PLUGIN_PREFIX}-border-second );

        --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-background: transparent;
        --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-text: var( --${PLUGIN_PREFIX}-text-main );
        
        --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-add-button-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-add-button-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-add-button-hover-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-add-button-hover-border: var( --${PLUGIN_PREFIX}-border-second );



        --${PLUGIN_PREFIX}-right-area-task-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-task-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-task-top-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-task-top-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-task-top-timer-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-task-top-finish-control-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-task-description-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-task-description-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-right-area-task-description-title-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-task-description-row-sub-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-task-description-responsible-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-task-description-row-add-button-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-task-description-row-add-button-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-task-description-row-add-button-hover-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-task-description-row-add-button-hover-border: var( --${PLUGIN_PREFIX}-border-second );

        --${PLUGIN_PREFIX}-right-area-task-description-editor-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-task-description-editor-ql-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-task-description-editor-ql-toolbar-background: var( --${PLUGIN_PREFIX}-background-main );

        --${PLUGIN_PREFIX}-right-area-task-description-editor-ql-toolbar-item-hover-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-right-area-task-description-files-add-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-task-description-files-add-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-task-description-subtasks-add-border : var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-task-description-subtasks-add-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-task-description-footer-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-task-description-footer-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-task-chat-background: var( --${PLUGIN_PREFIX}-overlay-main );

        --${PLUGIN_PREFIX}-right-area-task-chat-message-date-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-task-chat-message-card-background: var( --${PLUGIN_PREFIX}-background-main );

        --${PLUGIN_PREFIX}-right-area-task-chat-message-card-quote-background: var( --${PLUGIN_PREFIX}-background-second );

        --${PLUGIN_PREFIX}-right-area-task-chat-message-card-user-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-task-chat-message-card-time-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-task-chat-message-card-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-task-chat-event-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-task-chat-event-head-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-task-chat-event-decorated-background: var( --${PLUGIN_PREFIX}-overlay-main );

        --${PLUGIN_PREFIX}-right-area-task-chat-footer-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-task-chat-footer-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-task-chat-emoji-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-task-chat-emoji-border: var( --${PLUGIN_PREFIX}-border );



        --${PLUGIN_PREFIX}-right-area-projects-list-header-background: var( --${PLUGIN_PREFIX}-overlay-main );
        --${PLUGIN_PREFIX}-right-area-projects-list-header-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-projects-list-row-hover-background: var( --${PLUGIN_PREFIX}-overlay-main );

        --${PLUGIN_PREFIX}-right-area-projects-list-row-name-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-projects-list-row-desc-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-projects-list-row-tasks-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-projects-list-row-date-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-projects-list-row-owner-text: var( --${PLUGIN_PREFIX}-text-main );



        --${PLUGIN_PREFIX}-right-area-feed-header-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-feed-header-auto-read-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-feed-header-read-all-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-feed-header-read-all-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-feed-header-read-all-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-feed-header-read-all-hover-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-feed-header-read-all-hover-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-feed-header-read-all-hover-border: var( --${PLUGIN_PREFIX}-border-second );

        --${PLUGIN_PREFIX}-right-area-feed-card-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-feed-card-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-feed-card-title-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-feed-card-event-background: transparent;
        --${PLUGIN_PREFIX}-right-area-feed-card-event-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-feed-card-event-time-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-feed-card-event-info-creator-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-feed-card-event-info-action-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-feed-card-event-info-data-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-feed-card-event-info-data-background: var( --${PLUGIN_PREFIX}-background-second );
        --${PLUGIN_PREFIX}-right-area-feed-card-event-info-data-text: var( --${PLUGIN_PREFIX}-text-main );

        

        --${PLUGIN_PREFIX}-right-area-report-card-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-report-card-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-report-card-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-report-card-username-text: var( --${PLUGIN_PREFIX}-text-main );
        --${PLUGIN_PREFIX}-right-area-report-card-tasks-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-report-card-result-text: var( --${PLUGIN_PREFIX}-text-main );



        --${PLUGIN_PREFIX}-right-area-board-title-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-board-stage-title-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-board-add-stage-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-board-add-stage-hover-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-board-skeleton-background: var( --${PLUGIN_PREFIX}-background-main );

        --${PLUGIN_PREFIX}-right-area-board-card-border: var( --${PLUGIN_PREFIX}-border );
        --${PLUGIN_PREFIX}-right-area-board-card-background: var( --${PLUGIN_PREFIX}-background-main );

        --${PLUGIN_PREFIX}-right-area-board-card-title-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-board-adder-hover-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-board-adder-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-board-adder-hover-text: var( --${PLUGIN_PREFIX}-text-main );

        /* List */
        /* --${PLUGIN_PREFIX}-right-area-list */

        /* Profile */
        --${PLUGIN_PREFIX}-right-area-profile-background: var( --${PLUGIN_PREFIX}-background-main );
        --${PLUGIN_PREFIX}-right-area-profile-border: var( --${PLUGIN_PREFIX}-border );

        --${PLUGIN_PREFIX}-right-area-profile-title-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-profile-title-quantity-text: var( --${PLUGIN_PREFIX}-text-second );

        --${PLUGIN_PREFIX}-right-area-profile-info-key-text: var( --${PLUGIN_PREFIX}-text-second );
        --${PLUGIN_PREFIX}-right-area-profile-info-value-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-profile-apps-title-text: var( --${PLUGIN_PREFIX}-text-main );

        --${PLUGIN_PREFIX}-right-area-profile-projects-list-row-name-text: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-name-text );
        --${PLUGIN_PREFIX}-right-area-profile-projects-list-row-desc-text: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-name-desc );
    }

    /* Service */
    #preloader {
        background-color: var( --${PLUGIN_PREFIX}-service-preloader-background );
    }

    #preloader svg {
        filter: brightness( 3.25 );
    }



    .skelet-block {
        background-color: var( --${PLUGIN_PREFIX}-service-skeleton );
    }


    
    .t-choise {
        background-color: var( --${PLUGIN_PREFIX}-service-user-list-background ) !important;
        border-color: var( --${PLUGIN_PREFIX}-service-user-list-border ) !important;
    }

    .t-choise .t-choise__user {
        border-radius: 6px;
    }

    .t-choise .t-choise__user:hover:not( .t-choise__user_blocked ),
    .t-choise .t-choise__user_selected {
        background-color: var( --${PLUGIN_PREFIX}-service-user-list-item-selected-background );
    }

    .t-choise .t-choise__user-name {
        color: var( --${PLUGIN_PREFIX}-service-user-list-item-username );
    }

    .t-choise .t-input__value {
        color: var( --${PLUGIN_PREFIX}-service-user-list-input-text );
        border-color: var( --${PLUGIN_PREFIX}-service-user-list-input-border );
    }

    .t-choise .t-input__value:hover:not( .t-input__value_disabled ),
    .t-choise .t-input__value_focus {
        border-color: var( --${PLUGIN_PREFIX}-service-user-list-input-hover-border );
    }

    .t-choise .t-choise__group {
        border-top: 1px solid var( --${PLUGIN_PREFIX}-service-user-list-group-border );
        box-shadow: unset !important;
    }



    .daterangepicker {
        background-color: var( --${PLUGIN_PREFIX}-service-date-picker-background );
        border-color: var( --${PLUGIN_PREFIX}-service-date-picker-border );
    }

    .daterangepicker .ranges li {
        color: var( --${PLUGIN_PREFIX}-service-date-picker-range-text );
    }
    .daterangepicker .ranges li.active,
    .daterangepicker .ranges li:hover {
        color: var( --${PLUGIN_PREFIX}-service-date-picker-range-selected-text );
        background-color: var( --${PLUGIN_PREFIX}-service-date-picker-range-selected-background );
    }

    .daterangepicker .drp-calendar.left {
        border-color: var( --${PLUGIN_PREFIX}-service-date-picker-border ) !important;
    }

    .daterangepicker .calendar-table {
        border-color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-border );
        background-color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-background );
    }

    .daterangepicker .calendar-table th,
    .daterangepicker .calendar-table td {
        color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-text );
    }

    .daterangepicker td.in-range {
        background-color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-date-range-background );
    }

    .daterangepicker td.available:hover,
    .daterangepicker th.available:hover {
        color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-date-hover-color );
        background-color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-date-hover-background );
    }

    .daterangepicker td.active,
    .daterangepicker td.active:hover {
        background-color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-date-selected-background );
    }

    .daterangepicker td.off,
    .daterangepicker td.off.in-range,
    .daterangepicker td.off.start-date,
    .daterangepicker td.off.end-date {
        background-color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-date-off-month-background );
    }

    .daterangepicker .calendar-time {
        color: var( --${PLUGIN_PREFIX}-service-date-picker-calendar-text );
    }

    .daterangepicker select.hourselect,
    .daterangepicker select.minuteselect,
    .daterangepicker select.secondselect,
    .daterangepicker select.ampmselect {
        color: var( --${PLUGIN_PREFIX}-service-date-picker-time-double-dots-color );
        border-color: var( --${PLUGIN_PREFIX}-service-date-picker-time-picker-border );
        background-color: var( --${PLUGIN_PREFIX}-service-date-picker-time-picker-background );
    }



    .options-menu.context-menu {
        background-color: var( --${PLUGIN_PREFIX}-service-options-menu-background );
        border-color: var( --${PLUGIN_PREFIX}-service-options-menu-border );
    }
    .options-menu.context-menu:after {
        background-color: var( --${PLUGIN_PREFIX}-service-options-menu-background );
        border-color: var( --${PLUGIN_PREFIX}-service-options-menu-border );
    }
    .options-menu.context-menu .context-menu-element {
        color: var( --${PLUGIN_PREFIX}-service-options-menu-element-text );
    }
    .options-menu.context-menu .context-menu-element:hover {
        color: var( --${PLUGIN_PREFIX}-service-options-menu-element-hover-text );
        background-color: var( --${PLUGIN_PREFIX}-service-options-menu-element-hover-background );
    }



    .t-profile {
        background-color: var( --${PLUGIN_PREFIX}-service-profile-background ) !important;
        border-color: var( --${PLUGIN_PREFIX}-service-profile-border ) !important;
    }

    .t-profile .t-profile__info .t-profile__subtitle {
        color: var( --${PLUGIN_PREFIX}-service-profile-info-title-text );
    }

    .t-profile .t-profile__info .t-profile__value {
        color: var( --${PLUGIN_PREFIX}-service-profile-info-value-text );
    }



    .t-modal__main {
        background-color: var( --${PLUGIN_PREFIX}-service-modal-background ) !important;
        border-color: var( --${PLUGIN_PREFIX}-service-modal-border ) !important;
    }

    .t-modal__main .t-modal__top .t-modal__title {
        color: var( --${PLUGIN_PREFIX}-service-modal-top-title-text );
    }

    .t-modal__main .t-modal__top svg {
        filter: invert( 1 );
    }

    .t-modal__main .sessions__container .sessions__headline {
        color: var( --${PLUGIN_PREFIX}-service-modal-session-title-text );
    }



    .t-modal__main .account-adder .t-input__key {
        color: var( --${PLUGIN_PREFIX}-service-modal-account-adder-field-key-text );
    }

    .t-modal__main .account-adder .t-input__value {
        color: var( --${PLUGIN_PREFIX}-service-modal-account-adder-field-value-text );
        border-color: var( --${PLUGIN_PREFIX}-service-modal-account-adder-field-value-border );
    }

    .t-modal__main .account-adder .t-input__value:hover {
        border-color: var( --${PLUGIN_PREFIX}-service-modal-account-adder-field-value-hover-border );
    }



    .tippy-box .t-emoji-select {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-chat-emoji-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-chat-emoji-border );
    }

    /*
    .tippy-box .t-emoji-select:after {
        content: "";
        height: 32px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient( 0deg, var( --${PLUGIN_PREFIX}-right-area-task-chat-emoji-background ), transparent );
    }
    */

    

    /* Left menu */
    .sidebar {
        background-color: var( --${PLUGIN_PREFIX}-left-menu-background ) !important;
        border-color: var( --${PLUGIN_PREFIX}-left-menu-border ) !important;
    }

    .sidebar .sidebar__logo {
        color: var( --${PLUGIN_PREFIX}-left-menu-logo-text );
    }

    .sidebar .sidebar__cube {
        filter: brightness( 3.25 );
    }

    .sidebar .nav__text {
        color: var( --${PLUGIN_PREFIX}-left-menu-navigation-text );
    }

    .sidebar .nav__icon {
        filter: invert( 1 );
    }

    .sidebar .nav__link_active .nav__wrapper,
    .sidebar .nav__element:hover .nav__wrapper {
        background-color: var( --${PLUGIN_PREFIX}-left-menu-navigation-active-background );
    }

    .sidebar .projects {
        border-color: var( --${PLUGIN_PREFIX}-left-menu-border ) !important;
    }

    .sidebar .projects__title {
        color: var( --${PLUGIN_PREFIX}-left-menu-projects-text );
    }

    .sidebar .projects__link_active,
    .sidebar .projects__link:hover:not( .projects__link_active ) {
        background-color: var( --${PLUGIN_PREFIX}-left-menu-projects-active-background );
    }

    .sidebar .current-task {
        background-color: var( --${PLUGIN_PREFIX}-left-menu-current-task-background );
        border-color: var( --${PLUGIN_PREFIX}-left-menu-current-task-border );

        border-bottom: 1px solid var( --${PLUGIN_PREFIX}-left-menu-current-task-border );
    }

    .sidebar .current-task .current-task__bottom {
        color: var( --${PLUGIN_PREFIX}-left-menu-current-task-text );
    }

    .sidebar .current-task .current-task__timer p {
        color: var( --${PLUGIN_PREFIX}-left-menu-current-task-timer-text );
    }

    .sidebar .profile {
        border-color: var( --${PLUGIN_PREFIX}-left-menu-border ) !important;
    }

    .sidebar .profile .profile__button {
        border: none !important;
    }

    .sidebar .profile .profile__user-name {
        color: var( --${PLUGIN_PREFIX}-left-menu-profile-user-name-text );
    }
    .sidebar .profile .profile__account-name {
        color: var( --${PLUGIN_PREFIX}-left-menu-profile-account-name-text );
    }

    .sidebar .profile .menu {
        background-color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-background );
        border-color: var( --${PLUGIN_PREFIX}-left-menu-border ) !important;
    }

    .sidebar .profile .menu .menu__change-account {
        color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-title-text );
    }

    .sidebar .profile .menu .menu__change-account .t-common-icon svg {
        filter: invert( 1 );
    }

    .sidebar .profile .menu .menu__accounts {
        border-color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-role-border );
    }

    .sidebar .profile .menu .menu__account:hover,
    .sidebar .profile .menu .menu__account.current {
        background-color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-background );
    }

    .sidebar .profile .menu .menu__account.current .menu__account-name {
        color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-info-text );
    }

    .sidebar .profile .menu .menu__account.current .menu__account-domain {
        color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-domain-text );
    }

    .sidebar .profile .menu .menu__account.current .menu__account-id {
        color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-change-account-id-text );
    }

    .sidebar .profile .menu .profile__nav .profile__route p {
        color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-nav-text );
    }

    .sidebar .profile .menu .profile__nav .profile__route:hover p {
        color: var( --${PLUGIN_PREFIX}-left-menu-profile-menu-nav-hover-text );
    }

    .sidebar .profile .menu .profile__nav .profile__route svg {
        filter:invert( 1 );
    }



    /* Right Area */
    #right {
        background-color: var( --${PLUGIN_PREFIX}-right-area-background ) !important;
    }



    #right .page__title {
        color: var( --${PLUGIN_PREFIX}-right-area-title-text );
    }

    #right .page__title h2 span {
        color: var( --${PLUGIN_PREFIX}-right-area-title-count );
    }



    #right .search-and-filter .top-filter__filter-icon:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-button-active-background );
    }

    #right .search-and-filter .top-filter__body {
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-filter-border );
    }

    #right .search-and-filter .top-filter__body .top-filter__presets {
        border-color: var( --${PLUGIN_PREFIX}-right-area-filter-border );
    }

    #right .search-and-filter .top-filter__body .top-filter__presets .preset:not( .preset_active ) {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-tab-text );
    }

    #right .search-and-filter .top-filter__body .top-filter__presets .preset_active,
    #right .search-and-filter .top-filter__body .top-filter__presets .preset:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-tab-active-background );
    }

    #right .top-filter__body .top-filter__right .top-filter__name {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-title );
    }

    #right .top-filter__body .top-filter__right .top-filter__box {
        border-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-border );
    }

    #right .top-filter__body .top-filter__right .top-filter__box:hover {
        border-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-hover-border );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__detach-date svg,
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__status-dropdown svg,
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__uncheck-all-button {
        filter: invert( 1 );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__projects-state_empty p,
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__status-info p,
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__users_empty p,
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__date-paceholder_empty p {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-empty ) !important;
    }

    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__projects-state ul li p,
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__box_not-empty .top-filter__status-info p,
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__users ul li p,
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__datetime-input {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-non-empty ) !important;
    }

    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__projects-state ul li svg {
        filter: invert( 1 );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .t-add-project-list {
        border-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-border );
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-background );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .t-add-project-list input {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-search-color );
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-search-background );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .t-add-project-list__results .t-add-project-list__subtitle {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-result-title );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .t-add-project-list__results .t-add-project-list__item {
        border-radius: 6px;
    }

    #right .top-filter__body .top-filter__right .top-filter__box .t-add-project-list__results .t-add-project-list__item-name {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-result-item-text );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .t-add-project-list__results .t-add-project-list__item:hover:not( .t-add-project-list__item_blocked ),
    #right .top-filter__body .top-filter__right .top-filter__box .t-add-project-list__results .t-add-project-list__item_selected {
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-result-item-selected-background );
    }
    #right .top-filter__body .top-filter__right .top-filter__box .t-add-project-list__results .t-add-project-list__item_selected .t-add-project-list__item-name {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-project-list-result-item-selected-text );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__status-list {
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-status-list-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-status-list-border );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__status-list .top-filter__staus-item:hover:not( .top-filter__staus-item_blocked ),
    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__status-list .top-filter__staus-item_selected {
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-field-status-list-item-selected-background );
    }

    #right .top-filter__body .top-filter__right .top-filter__box .top-filter__users ul li svg {
        filter: invert( 1 );
    }

    #right .top-filter__body .top-filter__right .top-filter__footer {
        border-color: var( --${PLUGIN_PREFIX}-right-area-filter-border );
    }

    #right .top-filter__body .top-filter__right .top-filter__footer .t-button_blue {
        color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-footer-save-template-button-text );
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-footer-save-template-button-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-footer-save-template-button-border );
    }

    #right .top-filter__body .top-filter__right .top-filter__footer .t-button_blue:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-filter-presets-right-area-footer-save-template-button-hover-background );
    }

    #right .search-and-filter .t-global-search {
        background-color: var( --${PLUGIN_PREFIX}-right-area-search-background );
    }

    #right .search-and-filter .t-global-search:hover {
        outline-color: var( --${PLUGIN_PREFIX}-right-area-search-border ) !important;
    }

    #right .search-and-filter .t-global-search:has( .t-global-search__input:focus ) {
        outline-color: var( --${PLUGIN_PREFIX}-right-area-search-hover-border ) !important;
    }

    #right .search-and-filter .t-global-search__input {
        color: var( --${PLUGIN_PREFIX}-right-area-search-input-text );
    }

    #right .search-and-filter .t-search-results {
        overflow-y: unset;
        background-color: var( --${PLUGIN_PREFIX}-right-area-search-result-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-search-result-border );
    }

    #right .search-and-filter .t-search-results:after {
        background-color: var( --${PLUGIN_PREFIX}-right-area-search-result-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-search-result-border );
    }

    #right .search-and-filter .t-search-results .category-header {
        background-color: var( --${PLUGIN_PREFIX}-right-area-search-result-section-background );
    }

    #right .search-and-filter .t-search-results .global-search-comments__item {
        border-color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-comments-border );
    }

    #right .search-and-filter .t-search-results .global-search-comments__inner {
        color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-comments-text );
    }

    #right .search-and-filter .t-search-results .global-search-comments__task-title {
        color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-comments-task-text );
    }

    #right .search-and-filter .t-search-results .global-search-comments__created-at {
        color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-comments-creation-date-text );
    }

    #right .search-and-filter .t-search-results .t-plus-btn {
        background-color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-item-add-button-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-item-add-button-border );
    }

    #right .search-and-filter .t-search-results .t-plus-btn:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-item-add-button-hover-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-item-add-button-hover-border );
    }

    #right .search-and-filter .t-search-results .category .category-tasks__item .category-tasks__title {
        color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-tasks-item-text )
    }

    #right .search-and-filter .t-search-results .category .category-tasks__item .responsible__name {
        color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-tasks-responsible-username );
    }

    #right .search-and-filter .t-search-results .category .category-tasks__item .t-common-icon svg {
        filter: invert( 1 );
    }

    #right .search-and-filter .t-search-results .category .global-search-files__item {
        border-color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-files-border );
    }

    #right .search-and-filter .t-search-results .category .global-search-files__item .global-search-files__inner {
        color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-files-text );
    }

    #right .search-and-filter .t-search-results .category .global-search-files__item .global-search-files__task-title {
        color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-files-task-text );
    }

    #right .search-and-filter .t-search-results .category .global-search-files__item .global-search-files__created-at {
        color: var( --${PLUGIN_PREFIX}-right-area-search-result-category-files-creation-date-text );
    }

    /* Tasks */
    #right .wrapper .tasks-list__body {
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-content-background );
    }



    #right .wrapper .t-head-of-tasks-list__top {
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-border );
    }

    #right .wrapper .t-head-of-tasks-list__top .t-head-of-tasks-list__right .t-common-icon svg {
        filter: invert( 1 );
    }



    #right .wrapper .t-head-of-tasks-list__top .t-head-of-tasks-list__right .t-sort__sortbox {
        color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-button-text );
    }

    #right .wrapper .t-head-of-tasks-list__top .t-head-of-tasks-list__right .t-sort__sortbox:hover button {
        color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-button-hover-text );
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-button-hover-background );
    }

    #right .wrapper .t-head-of-tasks-list__top .t-head-of-tasks-list__right .t-sort__sortbox ul {
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-border );
    }
    
    #right .wrapper .t-head-of-tasks-list__top .t-head-of-tasks-list__right .t-sort__sortbox ul li {
        color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-item-text );
    }

    #right .wrapper .t-head-of-tasks-list__top .t-head-of-tasks-list__right .t-sort__sortbox ul li:hover {
        color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-item-hover-text );
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-head-right-sort-list-item-hover-background );
    }



    #right .wrapper .task-row.tasks-list__head {
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-border );
    }

    #right .wrapper .task-row.tasks-list__head .task-row__cell {
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-border );
    }

    #right .wrapper .task-row.tasks-list__head .t-plus-btn {
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-add-button-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-add-button-border );
    }

    #right .wrapper .task-row.tasks-list__head .t-plus-btn:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-add-button-hover-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-add-button-hover-border );
    }



    #right .wrapper .task-row.tasks-list__task {
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-border );
    }

    #right .wrapper .task-row.tasks-list__task .t-plus-btn {
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-add-button-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-add-button-border );
    }

    #right .wrapper .task-row.tasks-list__task .t-plus-btn:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-add-button-hover-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-add-button-hover-border );
    }



    #right .wrapper .task-row.tasks-list__head .task-row__cell p {
        color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-header-row-text );
    }

    #right .wrapper .task-row.tasks-list__task .task-row__cell p {
        color: var( --${PLUGIN_PREFIX}-right-area-tasks-list-item-row-text );
    }



    #right .wrapper .task-row.tasks-list__head .t-common-icon svg {
        filter: invert( 1 );
    }

    #right .wrapper .task-row.tasks-list__task .t-common-icon svg {
        filter: invert( 1 );
    }



    #right .task {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-border );
    }

    #right .task .task-top {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-top-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-top-border );
    }

    #right .task .task-top .timer p {
        color: var( --${PLUGIN_PREFIX}-right-area-task-top-timer-text );
    }

    #right .task .task-top .task-top__finish-control {
        color: var( --${PLUGIN_PREFIX}-right-area-task-top-finish-control-text );
    }

    #right .task .task-top svg:not( .timer-toggler svg ):not( .task-top__timer-blocker_active svg ) {
        filter: invert( 1 );
    }

    #right .task .task__main_side_description .task-description__row .task-description__title-wrapper textarea {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-title-text );
    }

    #right .task .task__main_side_description .task-description__row .task-description__title-wrapper svg {
        filter: invert( 1 );
    }

    #right .task .task__main_side_description .task-description__row .task-description__subtitle {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-row-sub-text );
    }

    #right .task .task__main_side_description .task-description__row .t-plus-btn {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-description-row-add-button-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-description-row-add-button-border );
    }

    #right .task .task__main_side_description .task-description__row .t-plus-btn:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-description-row-add-button-hover-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-description-row-add-button-hover-border );
    }

    #right .task .task__main_side_description .describe .describe__subtitle {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-row-sub-text );
    }

    #right .task .task__main_side_description .task-description__info-responsible .responsible p {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-responsible-text );
    }

    #right .task .task__main_side_description .task-description__info-responsible svg {
        filter: invert( 1 );
    }

    #right .task .task__main_side_description .describe .describe__editor {
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-description-editor-border );
    }

    #right .task .task__main_side_description .describe .describe__editor .ql-editor {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-editor-ql-text );
    }

    #right .task .task__main_side_description .describe .describe__editor .ql-toolbar {
        padding: 2px;
        border-radius: 5px;

        background-color: var( --${PLUGIN_PREFIX}-right-area-task-description-editor-ql-toolbar-background );
    }

    #right .task .task__main_side_description .describe .describe__editor .ql-toolbar button:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-description-editor-ql-toolbar-item-hover-background );
    }

    #right .task .task__main_side_description .describe .describe__editor .ql-toolbar svg {
        filter: invert( 1 );
    }

    #right .task .task__main_side_description .files .files__subtitle {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-row-sub-text );
    }

    #right .task .task__main_side_description .files .files__attacher_empty {
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-description-files-add-border );
    }

    #right .task .task__main_side_description .files .files__attacher_empty p {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-files-add-text );
    }

    #right .task .task__main_side_description .files .files__attacher_empty svg {
        filter: invert( 1 );
    }

    #right .task .task__main_side_description .subtasks .subtasks__title {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-row-sub-text );
    }

    #right .task .task__main_side_description .subtasks .subtasks__adder {
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-description-subtasks-add-border );
    }

    #right .task .task__main_side_description .subtasks .subtasks__adder p {
        color: var( --${PLUGIN_PREFIX}-right-area-task-description-subtasks-add-text )
    }

    #right .task .task__main_side_description .subtasks .subtasks__adder svg {
        filter: invert( 1 );
    }



    #right .task .task__main_side_description .task-description__footer {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-description-footer-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-description-footer-border );
    }

    #right .task .task__main_side_description {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-description-background );
    }

    #right .task .task__chat-open .task__main_side_description {
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-description-border );
    }

    #right .task .task__chat .task__comments-data p {
        color: var( --${PLUGIN_PREFIX}-right-area-task-chat-message-date-text );
    }

    #right .task .task__chat .task__comment-wrapper {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-chat-background );
    }

    #right .task .task__chat .task__comment-wrapper .chat-event-head p {
        color: var( --${PLUGIN_PREFIX}-right-area-task-chat-event-head-text );
    }

    #right .task .task__chat .task__comment-wrapper .chat-event-body p {
        color: var( --${PLUGIN_PREFIX}-right-area-task-chat-event-text );
    }

    #right .task .task__chat .task__comment-wrapper .chat-event-body_decorated {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-chat-event-decorated-background );
    }

    #right .task .task__chat .task__comment-wrapper .message__date p {
        color: var( --${PLUGIN_PREFIX}-right-area-task-chat-message-date-text );
    }

    #right .task .task__chat .task__comment-wrapper .comment__card {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-chat-message-card-background );
    }

    #right .task .task__chat .task__comment-wrapper .comment__card .comment__tail {
        /* HACK HACK HACK HACK */
        filter: brightness(0.145);
    }

    #right .task .task__chat .task__comment-wrapper .comment__card .quatation__main {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-chat-message-card-quote-background );
    }

    #right .task .task__chat .task__comment-wrapper .comment__card .comment__info {
        color: var( --${PLUGIN_PREFIX}-right-area-task-chat-message-card-user-text );
    }

    #right .task .task__chat .task__comment-wrapper .comment__card .comment__time {
        color: var( --${PLUGIN_PREFIX}-right-area-task-chat-message-card-time-text );
    }

    #right .task .task__chat .task__comment-wrapper .comment__card .comment__value .ql-editor {
        color: var( --${PLUGIN_PREFIX}-right-area-task-chat-message-card-text );
    }

    #right .task .task__chat .task__comment-menu {
        background-color: var( --${PLUGIN_PREFIX}-right-area-task-chat-footer-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-task-chat-footer-border );
    }

    #right .task .task__chat .task__comment-menu .message-editor__control svg {
        filter: invert( 1 );
    }



    /* Projects */
    #right .projects-main .projects-main__header {
        background-color: var( --${PLUGIN_PREFIX}-right-area-projects-list-header-background );
        border-radius: 4px;
    }

    #right .projects-main .projects-main__header li {
        color: var( --${PLUGIN_PREFIX}-right-area-projects-list-header-text );
    }

    #right .projects-main .projects-main__list .t-project:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-hover-background );
    }

    #right .projects-main .projects-main__list .t-project__row .t-project__main .t-project__name {
        color: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-name-text );
    }

    #right .projects-main .projects-main__list .t-project__row .t-project__main .t-project__prev {
        color: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-desc-text );
    }

    #right .projects-main .projects-main__list .t-project__row .t-project__tasks p {
        color: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-tasks-text );
    }
    #right .projects-main .projects-main__list .t-project__row .t-project__date p {
        color: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-date-text );
    }
    #right .projects-main .projects-main__list .t-project__row .t-project__owner p {
        color: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-owner-text );
    }

    #right .projects-main .projects-main__list .t-project__row .t-common-icon svg {
        filter: invert( 1 );
    }



    /* Feed */
    #right .feed .feed__header {
        color: var( --${PLUGIN_PREFIX}-right-area-feed-header-text );
    }

    #right .feed .feed__header .feed__reader {
        color: var( --${PLUGIN_PREFIX}-right-area-feed-header-auto-read-text );
    }

    #right .feed .feed__header .t-read-all {
        background-color: var( --${PLUGIN_PREFIX}-right-area-feed-header-read-all-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-feed-header-read-all-hover-border );
        color: var( --${PLUGIN_PREFIX}-right-area-feed-header-read-all-text );
    }

    #right .feed .feed__header .t-read-all:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-feed-header-read-all-hover-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-feed-header-read-all-hover-border );
        color: var( --${PLUGIN_PREFIX}-right-area-feed-header-read-all-hover-text );
    }

    #right .feed .feed__groupe {
        background-color: var( --${PLUGIN_PREFIX}-right-area-feed-card-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-feed-card-border );
    }

    #right .feed .feed__groupe .feed__subtitle span {
        color: var( --${PLUGIN_PREFIX}-right-area-feed-card-title-text );
    }

    #right .feed .feed__groupe .feed__items-list .event {
        background-color: var( --${PLUGIN_PREFIX}-right-area-feed-card-event-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-feed-card-event-border );
    }

    #right .feed .feed__groupe .feed__items-list .event__time {
        color: var( --${PLUGIN_PREFIX}-right-area-feed-card-event-time-text );
    }

    #right .feed .feed__groupe .feed__items-list .event__body .event__head .event__creator-name {
        color: var( --${PLUGIN_PREFIX}-right-area-feed-card-event-info-creator-text );
    }
    #right .feed .feed__groupe .feed__items-list .event__body .event__head .event__action {
        color: var( --${PLUGIN_PREFIX}-right-area-feed-card-event-info-action-text );
    }

    #right .feed .feed__groupe .feed__items-list .event__body .event__data {
        color: var( --${PLUGIN_PREFIX}-right-area-feed-card-event-info-data-text );
        background-color: var( --${PLUGIN_PREFIX}-right-area-feed-card-event-info-data-background );
    }

    #right .feed .feed__groupe .feed__items-list .event__body .responsible-event__arrow,
    #right .feed .feed__groupe .feed__items-list .event__body .event__arrow {
        filter: invert( 1 );
    }

    #right .feed .feed__groupe .feed__items-list .t-common-icon svg {
        filter: invert( 1 );
    }



    /* Report */
    #right .department-card {
        background-color: var( --${PLUGIN_PREFIX}-right-area-report-card-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-report-card-border );
    }

    #right .department-card .department-card__title {
        color: var( --${PLUGIN_PREFIX}-right-area-report-card-text );
    }

    #right .department-card .t-worktime-row__name {
        color: var( --${PLUGIN_PREFIX}-right-area-report-card-username-text );
    }

    #right .department-card .t-worktime-row__tasks {
        color: var( --${PLUGIN_PREFIX}-right-area-report-card-tasks-text );
    }

    #right .department-card .department-card__results {
        color: var( --${PLUGIN_PREFIX}-right-area-report-card-result-text );
    }

    #right .department-card .department-card__results .department-card__name-cell {
        color: var( --${PLUGIN_PREFIX}-right-area-report-card-result-text );
    }



    /* Board */
    #right .project__title h2 {
        color: var( --${PLUGIN_PREFIX}-right-area-board-title-text );
    }

    #right .project__about .t-common-icon_background {
        filter: invert( 1 );
    }



    #right .board .skeleton-loader .skeleton-box {
        background-color: var( --${PLUGIN_PREFIX}-right-area-board-skeleton-background );
    }

    #right .board .board__wrapper {
        overflow-x: hidden;
    }

    #right .board .board__wrapper .board-stage__add-btn p {
        color: var( --${PLUGIN_PREFIX}-right-area-board-add-stage-text );
    }

    #right .board .board__wrapper .board-stage__add-btn:hover p {
        color: var( --${PLUGIN_PREFIX}-right-area-board-add-stage-hover-text );
    }

    #right .board .board__wrapper .board-stage__add-btn svg {
        filter: invert( 1 );
    }

    #right .board .board-stage__top .board-stage__title {
        color: var( --${PLUGIN_PREFIX}-right-area-board-stage-title-text );
    }

    #right .board .board-stage__top .t-common-icon svg {
        filter: invert( 1 );
    }

    #right .board .board-task {
        background-color: var( --${PLUGIN_PREFIX}-right-area-board-card-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-board-card-border );
    }

    #right .board .board-task .board-task__main .board-task__title {
        color: var( --${PLUGIN_PREFIX}-right-area-board-card-title-text );
    }

    #right .board .board-task .board-task__footer .t-common-icon svg {
        filter: invert( 1 );
    }



    #right .board .board-stage__task-adder {
        border-radius: 12px;
    }

    #right .board .board-stage__task-adder:hover {
        background-color: var( --${PLUGIN_PREFIX}-right-area-board-adder-hover-background );
    }

    #right .board .board-stage__task-adder p {
        color: var( --${PLUGIN_PREFIX}-right-area-board-adder-text );
    }

    #right .board .board-stage__task-adder:hover p {
        color: var( --${PLUGIN_PREFIX}-right-area-board-adder-hover-text );
    }

    #right .board .board-stage__task-adder svg {
        filter: invert( 1 );
    }



    #right .profile .profile__element {
        background-color: var( --${PLUGIN_PREFIX}-right-area-profile-background );
        border-color: var( --${PLUGIN_PREFIX}-right-area-profile-border );
    }



    #right .profile .profile__element .profile__left-head .profile__title {
        color: var( --${PLUGIN_PREFIX}-right-area-profile-title-text );
    }
    #right .profile .profile__element .profile__left-head .profile__projects-quantity {
        color: var( --${PLUGIN_PREFIX}-right-area-profile-title-quantity-text );
    }

    #right .profile .profile__element .profile__item .profile__key span {
        color: var( --${PLUGIN_PREFIX}-right-area-profile-info-key-text )
    }

    #right .profile .profile__element .profile__item .profile__value span {
        color: var( --${PLUGIN_PREFIX}-right-area-profile-info-value-text );
    }




    #right .profile .profile__element .profile__apps .profile__left-head {
        color: var( --${PLUGIN_PREFIX}-right-area-profile-apps-title-text );
    }



    #right .profile .profile__element .profile__projects .t-project__row .t-project__main .t-project__name {
        color: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-name-text );
    }

    #right .profile .profile__element .profile__projects .t-project__row .t-project__main .t-project__prev {
        color: var( --${PLUGIN_PREFIX}-right-area-projects-list-row-desc-text );
    }

    #right .profile .profile__element .profile__projects .t-project__row .t-common-icon svg {
        filter: invert( 1 );
    }
`);

(function() {
})();