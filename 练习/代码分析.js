function openAction(actionOptions, openImmediately) {
    var actionControl;

    return (actionOptions.id == "scan" ? openScan
            : actionOptions.id == "print" ? openPrint
            : ( (actionControl = actionControls[actionOptions.id]) ) ? actionControl.open
            : function(actionOptions, openImmediately) {
                var main = $("<div class='xux-fileService-main'>").appendTo(element), fileViewAction,
                    isFolderAsImmediateItem = actionOptions.immediateItem === "folder" ||
                            (actionOptions.frequentlyUsedItems &&
                                    actionOptions.frequentlyUsedItems.length === 1 &&
                                    actionOptions.frequentlyUsedItems[0] === "folder"),
                    openFileView;

                openFileView = function(item, currentValue, items) {
                    var modalWindow = $("<div />").appendTo("body"),
                        content = $("<div />").appendTo(modalWindow).css({ width: "100%", height: "100%" }),
                        valueInTheEdit = currentValue,
                        closePromise,
                        saveButton;

                    $("<h2 />").appendTo(modalWindow).text(item.label);

                    $("<button type='button'><span class='xux-icon xux-icon-cancel'></span></button>")
                            .appendTo(modalWindow)
                            .click(function() {
                                modalWindow.xuxModalWindow("close");
                                closePromise.reject();
                            });

                    saveButton = $("<button type='button'><span class='xux-icon xux-icon-save'></span></button>")
                            .appendTo(modalWindow)
                            .click(function() {
                                modalWindow.xuxModalWindow("close");
                                closePromise.resolve(valueInTheEdit);
                            });

                    modalWindow.xuxModalWindow({}).xuxModalWindow("open");

                    fileOrFolderItemRender(

                        "scan",
                        0,
                        function(fileView) {
                            return fileView.xuxFileView("currentFolder");
                        },
                        function(canStart) {
                            saveButton.xuxButton(canStart ? "enable" : "disable");
                        },
                        null,
                        function(fileView) {
                            fileViewAction = fileView;
                        },
                        actionOptions

                    ).apply(item, [ content, function(value) { 
                        valueInTheEdit = value;
                    }, null, items]);

                    openFileView = function() {
                        modalWindow.xuxModalWindow("open");
                        thisWidget._fileView = fileViewAction;
                        return closePromise = $.Deferred();
                    };
                    
                    return closePromise = $.Deferred();
                };

                main.xuxScan($.extend({
                    applicationReset: {
                        urlQueryOfDefaultApplicationReset: "openFileServiceActionImmediately=" + actionOptions.id
                    }			
                }, actionOptions, {
                    style: "modalWindow",
                    navigational: true,
                    title: actionOptions.label,
                    slideStart: true,
                    activity: "default",
                    
                    items: $.xux._extractAndApplyDefaultArray(actionOptions.items, [
                        {
                            id: "folder",
                            label: messages.folderSettingItemLabel,
                            labelMessageResourceId: "fileservice.folderSettingItemLabel",
                            icon: "xux-fileService-folderSettingItemIcon",
                            initialValue: null,
                            required: messages["scan.fileItemRequired"],
                            _noValueEquivalence: true,

                            valueLabel: function(value) {
                                return value ? value.name() : $.xux._settingsMessages.emptyValueLabel;
                            },

                            edit: !isFolderAsImmediateItem ? function(currentValue, _, control) {
                                return openFileView(this, currentValue, control.items());
                            } : null,

                            render: isFolderAsImmediateItem ? fileOrFolderItemRender(

                                "scan",
                                0,
                                function(fileView) {
                                    return fileView.xuxFileView("currentFolder");
                                },
                                function(canStart) {
                                    main.xuxScan("canStart", canStart);
                                },
                                null,
                                function(fileView) {
                                    fileViewAction = fileView;
                                },
                                actionOptions
                            ) : null
                        }
                    ]),
                    
                    menu: actionOptions.menu,

                    cancel: function() {
                        $(this).xuxScan("close");
                    },
                    immediateItem: actionOptions.immediateItem || (isFolderAsImmediateItem ? "folder" : null),
                    itemsOnInformation: actionOptions.itemsOnInformation
                }));
                
                return (actionControls[actionOptions.id] = {
                    open: function(actionOptions, openImmediately) {
                        preAction = action;
                        action = actionOptions.id;
                        //main.xuxScan("canStart", true).xuxScan("open");
                        main.xuxScan("open", { immediately: openImmediately });
                    },
                    
                    values:  function(values) {
                        return main.xuxScan.apply(main, values ? [ "values", values ] : [ "values" ]);
                    }
                }).open(actionOptions, openImmediately);
            })(actionOptions, openImmediately);
}