/* ================================================================
 * macaca-wd by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Apr 18 2016 12:34:10 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

/**
 * Query the server's current status.
 * @returns {Promise.<Object>} The server's current status.
 */
function status() {}

/**
 * Create a new session.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#dfn-new-session|POST /session}
 * @param {Object} desired Desired Capabilities
 * @returns {Promise.<Object>}
 */
function init(desired) {}

/**
 * Returns a list of the currently active sessions.
 * @returns {Promise.<Array>}
 */
function sessions() {}

/**
 * Delete the session.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#dfn-delete-session|DELETE /session/:sessionId}
 * @returns {Promise}
 */
function quit() {}

/**
 * Get the current context.
 * @returns {Promise.<string>}
 */
function currentContext() {}

/**
 * Set the current context.
 * @param {string} contextRef context reference from contexts
 * @returns {Promise}
 */
function context(contextRef) {}

/**
 * Get a list of the available contexts.
 * @returns {Promise.<Array>} A list of available contexts.
 */
function contexts() {}

/**
 * Set the amount of time the driver should wait when searching for elements.
 * @param {number} ms The amount of time to wait, in milliseconds
 * @returns {Promise}
 */
function setImplicitWaitTimeout(ms) {}

/**
 * Take a screenshot of the current page.
 * @returns {Promise.<string>} The screenshot as a base64 encoded PNG.
 */
function takeScreenshot() {}

/**
 * Get the current page source.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-page-source|GET 	/session/:sessionId/source}
 * @returns {Promise.<string>}
 */
function source() {}

/**
 * Move the mouse by an offset of the specificed element.
 * @param {number} [xoffset] X offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
 * @param {number} [yoffset] Y offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
 * @returns {Promise}
 */
function moveTo(xoffset, yoffset) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} using The locator strategy to use.
 * @param {string} value The search target.
 * @returns {Promise.<Element>}
 */
function element(using, value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The class name
 * @returns {Promise.<Element>}
 */
function elementByClassName(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The css selector
 * @returns {Promise.<Element>}
 */
function elementByCssSelector(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The ID attribute
 * @returns {Promise.<Element>}
 */
function elementById(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The name attribute
 * @returns {Promise.<Element>}
 */
function elementByName(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The text
 * @returns {Promise.<Element>}
 */
function elementByLinkText(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The partially text
 * @returns {Promise.<Element>}
 */
function elementByPartialLinkText(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The tag name
 * @returns {Promise.<Element>}
 */
function elementByTagName(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The XPath expression
 * @returns {Promise.<Element>}
 */
function elementByXPath(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The css selector
 * @returns {Promise.<Element>}
 */
function elementByCss(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} using The locator strategy to use.
 * @param {string} value The search target.
 * @returns {Promise.<Array>}
 */
function elements(using, value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The class name
 * @returns {Promise.<Array>}
 */
function elementsByClassName(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The css selector
 * @returns {Promise.<Array>}
 */
function elementsByCssSelector(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The ID attribute
 * @returns {Promise.<Array>}
 */
function elementsById(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The name attribute
 * @returns {Promise.<Array>}
 */
function elementsByName(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The text
 * @returns {Promise.<Array>}
 */
function elementsByLinkText(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The partially text
 * @returns {Promise.<Array>}
 */
function elementsByPartialLinkText(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The tag name
 * @returns {Promise.<Array>}
 */
function elementsByTagName(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The XPath expression
 * @returns {Promise.<Array>}
 */
function elementsByXPath(value) {}

/**
 * Search for multiple elements on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/elements}
 * @param {string} value The css selector
 * @returns {Promise.<Array>}
 */
function elementsByCss(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} using The locator strategy to use.
 * @param {string} value The search target.
 * @returns {Promise.<Element|null>}
 */
function elementOrNull(using, value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The class name
 * @returns {Promise.<Element|null>}
 */
function elementByClassNameOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The css selector
 * @returns {Promise.<Element|null>}
 */
function elementByCssSelectorOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The ID attribute
 * @returns {Promise.<Element|null>}
 */
function elementByIdOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The name attribute
 * @returns {Promise.<Element|null>}
 */
function elementByNameOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The text
 * @returns {Promise.<Element|null>}
 */
function elementByLinkTextOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The partially text
 * @returns {Promise.<Element|null>}
 */
function elementByPartialLinkTextOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The tag name
 * @returns {Promise.<Element|null>}
 */
function elementByTagNameOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The XPath expression
 * @returns {Promise.<Element|null>}
 */
function elementByXPathOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The css selector
 * @returns {Promise.<Element|null>}
 */
function elementByCssOrNull(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} using The locator strategy to use.
 * @param {string} value The search target.
 * @returns {Promise.<Element|null>}
 */
function elementIfExists(using, value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The class name
 * @returns {Promise.<Element|undefined>}
 */
function elementByClassNameIfExists(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The css selector
 * @returns {Promise.<Element|undefined>}
 */
function elementByCssSelectorIfExists(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The ID attribute
 * @returns {Promise.<Element|undefined>}
 */
function elementByIdIfExists(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The name attribute
 * @returns {Promise.<Element|undefined>}
 */
function elementByNameIfExists(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The text
 * @returns {Promise.<Element|undefined>}
 */
function elementByLinkTextIfExists(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The partially text
 * @returns {Promise.<Element|undefined>}
 */
function elementByPartialLinkTextIfExists(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The tag name
 * @returns {Promise.<Element|undefined>}
 */
function elementByTagNameIfExists(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The XPath expression
 * @returns {Promise.<Element|undefined>}
 */
function elementByXPathIfExists(value) {}

/**
 * Search for an element on the page, starting from the document root.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The css selector
 * @returns {Promise.<Element|undefined>}
 */
function elementByCssIfExists(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} using The locator strategy to use.
 * @param {string} value The search target.
 * @returns {Promise.<boolean>}
 */
function hasElement(using, value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The class name.
 * @returns {Promise.<boolean>}
 */
function hasElementByClassName(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The css selector.
 * @returns {Promise.<boolean>}
 */
function hasElementByCssSelector(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The ID attribute.
 * @returns {Promise.<boolean>}
 */
function hasElementById(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The name attribute.
 * @returns {Promise.<boolean>}
 */
function hasElementByName(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The text
 * @returns {Promise.<boolean>}
 */
function hasElementByLinkText(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The partially text
 * @returns {Promise.<boolean>}
 */
function hasElementByPartialLinkText(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The tag name
 * @returns {Promise.<boolean>}
 */
function hasElementByTagName(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The XPath expression
 * @returns {Promise.<boolean>}
 */
function hasElementByXPath(value) {}

/**
 * Check if element exists.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#elements|POST /session/:sessionId/element}
 * @param {string} value The css selector
 * @returns {Promise.<boolean>}
 */
function hasElementByCss(value) {}

/**
 * Click on an element.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#dfn-element-click|POST /session/:sessionId/element/:id/click}
 * @returns {Promise}
 */
function click() {}

/**
 * Returns the visible text for the element.
 * @returns {Promise.<string>}
 */
function text() {}

/**
 * Check if text is present.
 * @param {string} searchText The text to search.
 * @returns {Promise.<boolean>}
 */
function textPresent(searchText) {}

/**
 * Clear a TEXTAREA or text INPUT element's value.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#element-clear|POST /session/:sessionId/element/:id/clear}
 * @returns {Promise.<string>}
 */
function clear() {}

/**
 * Determine if an element is currently displayed.
 * @returns {Promise.<string>}
 */
function isDisplayed() {}

/**
 * Get the value of an element's attribute.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-attribute|GET /session/:sessionId/element/:id/attribute/:name}
 * @returns {Promise.<string>}
 */
function getAttribute() {}

/**
 * Query the value of an element's computed CSS property.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#get-element-css-value|GET /session/:sessionId/element/:id/css/:propertyName}
 * @returns {Promise.<string>}
 */
function getComputedCss() {}

/**
 * Single tap on the touch enabled device.
 * @returns {Promise.<string>}
 */
function tap() {}

/**
 * Flick on the touch screen using finger motion events.
 * @param xoffset
 * @param yoffset
 * @param speed
 * @returns {Promise.<string>}
 */
function flick() {}

/**
 * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#executing-script|POST /session/:sessionId/execute}
 * @param code script
 * @param [args] script argument array
 * @returns {Promise.<string>}
 */
function execute() {}

/**
 * Safely execute script within an eval block, always returning.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#executing-script|POST /session/:sessionId/execute}
 * @param code script
 * @param [args] script argument array
 * @returns {Promise.<string>}
 */
function safeExecute() {}

//function eval() {}

/**
 * Safely evaluate expression, always returning (using safeExecute).
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#executing-script|POST /session/:sessionId/execute}
 * @param code script
 * @returns {Promise.<string>}
 */
function safeEval() {}

/**
 * Get the current page title.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#accept-alert|GET /session/:sessionId/title}
 * @returns {Promise.<string>}
 */
function title() {}

/**
 * Accepts the currently displayed alert dialog.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#accept-alert|POST /session/:sessionId/accept_alert}
 * @returns {Promise.<string>}
 */
function acceptAlert() {}

/**
 * Dismisses the currently displayed alert dialog.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#dismiss-alert|POST /session/:sessionId/dismiss_alert}
 * @returns {Promise.<string>}
 */
function dismissAlert() {}

/**
 * Gets the text of the currently displayed JavaScript alert(), confirm(), or prompt() dialog.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#send-alert-text|GET /session/:sessionId/alert_text}
 * @returns {Promise.<string>}
 */
function alertText() {}

/**
 * Sends keystrokes to a JavaScript prompt() dialog.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#send-alert-text|POST /session/:sessionId/alert_text}
 * @param keys
 * @returns {Promise.<string>}
 */
function alertKeys() {}

/**
 * Retrieve the URL of the current page.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#get-current-url|GET /session/:sessionId/url}
 * @returns {Promise.<string>}
 */
function url() {}

/**
 * Navigate to a new URL.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#get|POST /session/:sessionId/url}
 * @param url get a new url.
 * @returns {Promise.<string>}
 */
function get() {}

/**
 * Navigate forwards in the browser history, if possible.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#back|POST /session/:sessionId/forward}
 * @returns {Promise.<string>}
 */
function forward() {}

/**
 * Navigate backwards in the browser history, if possible.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#back|POST /session/:sessionId/back}
 * @returns {Promise.<string>}
 */
function back() {}

/**
 * Refresh the current page.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#refresh|POST /session/:sessionId/refresh}
 * @returns {Promise.<string>}
 */
function refresh() {}

/**
 * Change focus to another window.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#switch-to-window|POST /session/:sessionId/window}
 * @returns {Promise.<string>}
 */
function window() {}

/**
 * Close the current window.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#close-window|DELETE /session/:sessionId/window}
 * @returns {Promise.<string>}
 */
function close() {}

/**
 * Retrieve the current window handle.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#get-window-handle|GET /session/:sessionId/window_handle}
 * @returns {Promise.<string>}
 */
function windowHandle() {}

/**
 * Retrieve the list of all window handles available to the session.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#get-window-handles|GET /session/:sessionId/window_handles}
 * @returns {Promise.<string>}
 */
function windowHandles() {}

/**
 * Get the size of the specified window.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#get-window-size|GET /session/:sessionId/window/size}
 * @param [handle] window handle to set size for (optional, default: 'current')
 * @returns {Promise.<string>}
 */
function getWindowSize() {}

/**
 * Change the size of the specified window.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#set-window-size|POST	/session/:sessionId/window/size}
 * @param width width in pixels to set size to
 * @param height height in pixels to set size to
 * @param [handle] window handle to set size for (optional, default: 'current')
 * @returns {Promise.<string>}
 */
function setWindowSize() {}

/**
 * Maximize the specified window if not already maximized.
 * @see {@link https://w3c.github.io/webdriver/webdriver-spec.html#dfn-maximize-window|POST /session/:sessionId/window/maximize}
 * @param handle window handle
 * @returns {Promise.<string>}
 */
function maximize() {}

module.exports = require('../wd/lib/main');