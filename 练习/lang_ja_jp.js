﻿var key = new Object();

var error_code_01;
var error_code_02;
var error_code_03;
var error_code_04;
var error_code_05;
var error_code_06;
var error_code_07;
var error_code_08;
var error_code_09;
var error_code_10;
var error_code_11;
var error_code_12;
var error_code_13;
var error_code_14;
var error_code_15;
var error_code_16;
var error_code_17;
var error_code_18;
var error_code_19;
var error_code_20;
var error_code_21;
var error_code_22;
var error_code_23;
var error_code_24;
var error_code_25;
var error_code_26;
var error_code_27;
var error_code_28;
var error_code_29;
var error_code_30;
var error_code_31;
var error_code_32;
var error_code_33;
var error_code_34;
var error_code_35;
var error_code_36;
var error_code_37;
var error_code_38;
var error_code_39;
var error_code_40;



$(function() {
key.index_font = "ペーパーレスファクス仕分け";
key.line_font = "回線設定";
key.line1_font = "回線1";
key.line2_font = "回線2";
key.line3_font = "回線3";
key.exception_font = "例外動作の設定";
key.schedule_font = "スケジュール";
key.import_font = "インポート";
key.exception_setting_font = "例外動作の詳細";
key.user_font = "担当者情報の確認";
key.export_font = "エクスポート";
key.name = "ペーパーレスファクス仕分け";
key.header = "ペーパーレスファクス仕分け";
key.upper_submit = "新しい設定を適用";
key.upper_reset = "-";
key.lower_submit = "新しい設定を適用";
key.lower_reset = "-";

key.index_title = "ペーパーレスファクス仕分け";
key.index_line_title = "回線設定";
key.line1_settings_label = "回線1";
key.line2_settings_label = "回線2";
key.line3_settings_label = "回線3";
key.line1_settings_auto_run_label = "転送の自動実行";
key.line2_settings_auto_run_label = "転送の自動実行";
key.line3_settings_auto_run_label = "転送の自動実行";

key.user_title = "担当者情報の確認";
key.user_description = "登録情報(担当者名、宛先名、電話番号、G3ID)から検索することができます。";
key.user_description_unset = "担当者情報をインポートすると、担当者ごとに仕分けフォルダーを作成することができます。\n(最大登録件数：5000件)\n\nインポート画面から担当者情報をインポートしてください。\n";
key.user_search = "検索";
key.user_thead_user = "担当者名";
key.user_thead_mail = "宛先名";
key.user_thead_phone = "電話番号";
key.user_thead_g3id = "G3ID";

key.exception_settings_title = "例外動作の設定";
key.exception_settings_transfer1_label = "転送先1:";
key.exception_settings_transfer2_label = "転送先2:";
key.exception_settings_print_label = "プリント";
key.exception_settings_notification_label = "通知先";

key.line_description = "受信したファクスをパソコンやサーバー等に転送したり、ダイヤルイン番号や相手先番号ごとに振り分けして保存、また指定の出力トレイにプリントしたり、受信したことをメールで通知することができます。";
key.line_description_ibg = "受信したファクス文書をパソコンやサーバー等に転送したり、送信者G3IDごとに仕分けて保存できます。また、指定の出力トレイにプリントしたり、受信したことをメールで通知できます。";
key.exception_description = "特定の時間帯や期間だけ例外動作を設定することができます。<br />(スケジュール),（例外動作の詳細）から設定してください。";

//ARバリデーション
key.from = "～";

key.line1_title = "回線1";
key.line2_title = "回線2";
key.line3_title = "回線3";
key.exception_setting_title = "例外動作の詳細";
key.update_alert_msg = "更新待ちの設定があります。変更されるまでは、変更前の設定で動作します。";
key.box_title = "ボックス設定";
// *メッセージ
key.required_message = "必須項目";
key.box_description = "ファクス受信文書の保存先を設定します";
key.box_number = "ボックス番号";
key.auto_input = "空き番号を自動入力";
key.box_name = "ボックス名";
key.box_auto_deleate_label = "文書取り出し後の削除";
key.box_auto_run_label = "転送の自動実行";
key.auto_input = "空き番号を自動入力";
key.line_setting_title = "動作設定";
key.line_setting_description = "受信したファクスをパソコンやサーバー等に転送したり、ダイヤルイン番号や相手先番号ごとに振り分けして保存、また指定の出力トレイにプリントしたり、受信したことをメールで通知することができます。";
key.line_setting_description_ibg = "受信したファクス文書をパソコンやサーバー等に転送したり、送信者G3IDごとに仕分けて保存できます。また、指定の出力トレイにプリントしたり、受信したことをメールで通知できます。";
key.transfer1_label = "転送1";
key.transfer2_label = "転送2";
key.print_label = "プリント";
key.notification_label = "通知先";
key.line_setting_name = "動作設定名";
key.tabs_transfer1 = "転送1";
key.tabs_transfer2 = "転送2";
key.tabs_print = "プリント";
key.tabs_notification = "通知先";
key.line_setting_default = "回線%s動作設定";

//  例外動作のジョブフロー名
key.jobflow_name_FX = "例外動作設定";
key.jobflow_name_IBG = "Exception Settings";


key.transfer1_description = "ファクス受信文書の転送先を設定します。";
key.transfer1_transfer_name = "転送先";
key.transfer1_transfer_unset = "(未設定)";
key.transfer1_transfer_smb = "SMB";
key.transfer1_transfer_ftp = "FTP";
key.transfer1_transfer_wf = "Working Folder";
key.transfer1_transfer_mail = "メール";
key.transfer1_ftp_userID = "ユーザーID";
key.transfer1_ftp_password = "パスワード";
key.transfer1_ftp_server_address = "サーバ名/IPアドレス";
key.transfer1_ftp_transfer_place = "保存場所";
key.transfer1_ftp_port_radioBox_label = "ポート番号";
key.transfer1_ftp_port_radio_off_label = "標準ポート(21)";
key.transfer1_ftp_port_radio_on_label = "変更する";
key.transfer1_ftp_port_number_label = "(1～65535)";
key.transfer1_ftp_connection = "接続確認";
key.transfer1_ftp_connection_button = "空ファイルを送信";
key.transfer1_smb_userID = "ユーザーID";
key.transfer1_smb_password = "パスワード";
key.transfer1_smb_server_address = "サーバ名/IPアドレス";
key.transfer1_smb_share_name = "共有名";
key.transfer1_smb_transfer_place = "保存場所";
key.transfer1_smb_port_radioBox_label = "ポート番号";
key.transfer1_smb_port_radio_off_label = "標準ポート(139)";
key.transfer1_smb_port_radio_on_label = "変更する";
key.transfer1_smb_port_number_label = "(1～65535)";
key.transfer1_smb_connection = "接続確認";
key.transfer1_smb_connection_button = "空ファイルを送信";
key.transfer1_wf_userID = "ユーザーID";
key.transfer1_wf_password = "パスワード";
key.transfer1_wf_address = "転送先URL";
key.transfer1_mail_name = "宛先名";
key.transfer1_mail_address = "メールアドレス";

key.transfer1_send_again_label = "送信失敗時の再送信";
key.transfer1_send_times_label = "再送信回数";
key.transfer1_send_interval_label = "再送信間隔";

key.transfer2_description = "ファクス受信文書の転送先を設定します。";
key.transfer2_transfer_name = "転送先";
key.transfer2_transfer_unset = "(未設定)";
key.transfer2_transfer_smb = "SMB";
key.transfer2_transfer_ftp = "FTP";
key.transfer2_transfer_wf = "Working Folder";
key.transfer2_transfer_mail = "メール";
key.transfer2_ftp_userID = "ユーザーID";
key.transfer2_ftp_password = "パスワード";
key.transfer2_ftp_server_address = "サーバ名/IPアドレス";
key.transfer2_ftp_transfer_place = "保存場所";
key.transfer2_ftp_port_radioBox_label = "ポート番号";
key.transfer2_ftp_port_radio_off_label = "標準ポート(21)";
key.transfer2_ftp_port_radio_on_label = "変更する";
key.transfer2_ftp_port_number_label = "(1～65535)";
key.transfer2_ftp_connection = "接続確認";
key.transfer2_ftp_connection_button = "空ファイルを送信";
key.transfer2_smb_userID = "ユーザーID";
key.transfer2_smb_password = "パスワード";
key.transfer2_smb_server_address = "サーバ名/IPアドレス";
key.transfer2_smb_share_name = "共有名";
key.transfer2_smb_transfer_place = "保存場所";
key.transfer2_smb_port_radioBox_label = "ポート番号";
key.transfer2_smb_port_radio_off_label = "標準ポート(139)";
key.transfer2_smb_port_radio_on_label = "変更する";
key.transfer2_smb_port_number_label = "(1～65535)";
key.transfer2_smb_connection = "接続確認";
key.transfer2_smb_connection_button = "空ファイルを送信";
key.transfer2_wf_userID = "ユーザーID";
key.transfer2_wf_password = "パスワード";
key.transfer2_wf_address = "転送先URL";
key.transfer2_mail_name = "宛先名";
key.transfer2_mail_address = "メールアドレス";

key.transfer2_send_again_label = "送信失敗時の再送信";
key.transfer2_send_times_label = "再送信回数";
key.transfer2_send_interval_label = "再送信間隔";

key.send_times_op = "_hdt1回";
key.send_interval_op = "_hdt1秒";

key.print_description = "ファクス受信文書を出力します。";
key.print_name = "排出先";
key.print_auto = "自動";
key.print_center_tray = "センタートレイ";
key.print_side_tray = "サイドトレイ";
key.print_top_tray = "排出トレイ";
key.print_finisher_tray = "フィニッシャートレイ";
key.print_center_upper_tray = "センタートレイ上段";
key.print_center_lower_tray = "センタートレイ下段";
key.print_mailbox_bin = "メールボックスビン%s";
key.print_finisher_top_tray = "フィニッシャー排出トレイ";
key.print_stacker_tray = "スタッカートレイ";
key.print_stacker_tray1 = "スタッカートレイ1";
key.print_stacker_tray2 = "スタッカートレイ2";
key.print_stacker_tray3 = "スタッカー排出トレイ";
key.print_stacker_top_tray1 = "スタッカー排出トレイ1";
key.print_stacker_top_tray2 = "スタッカー排出トレイ2";
key.inner_finisher_tray = "排出トレイ";

key.notification_description = "ファクス受信した通知をします。";
key.notification_address_name = "宛先名";
key.notification_address = "メールアドレス";

key.transfer1_sort_settings_title = "仕分け設定";
key.transfer1_received_fax_info_label = "ファクス送受信情報で仕分ける";
key.transfer1_received_fax_g3id_info_label = "送信者G3IDで仕分ける";
key.transfer1_no_destination_folder_label = "該当する[%s]のフォルダーがない場合は自動作成する";
key.transfer1_storage_location_folder_label = "仕分けできない受信文書の保存先フォルダー名";
key.transfer1_spam_fax_folder_label = "迷惑ファクスを仕分ける";
key.transfer1_sort_spam_fax_label = "迷惑ファクスの保存先フォルダー名";
key.transfer1_sort_by_date_label = "日付で仕分ける";

key.transfer1_sort_date_year_label = "年";
key.transfer1_sort_date_month_label = "月";
key.transfer1_sort_date_day_label = "日";
key.transfer1_sort_date_onefolder_label = "１つのフォルダーにする";
key.transfer1_sort_date_connect_label = "日付をつなげる";
key.transfer1_sort_area1_label = "階層1";
key.transfer1_sort_area2_label = "階層2";
key.transfer1_sort_area3_label = "階層3";
key.transfer1_folder_reset="すべてやり直し";

key.transfer2_sort_settings_title = "仕分け設定";
key.transfer2_received_fax_info_label = "ファクス送受信情報で仕分ける";
key.transfer2_received_fax_g3id_info_label = "送信者G3IDで仕分ける";
key.transfer2_no_destination_folder_label = "該当する[%s]のフォルダーがない場合は自動作成する";
key.transfer2_storage_location_folder_label = "仕分けできない受信文書の保存先フォルダー名";
key.transfer2_spam_fax_folder_label = "迷惑ファクスを仕分ける";
key.transfer2_sort_spam_fax_label = "迷惑ファクスの保存先フォルダー名";
key.transfer2_sort_by_date_label = "日付で仕分ける";

key.transfer2_sort_date_year_label = "年";
key.transfer2_sort_date_month_label = "月";
key.transfer2_sort_date_day_label = "日";
key.transfer2_sort_date_onefolder_label = "１つのフォルダーにする";
key.transfer2_sort_date_connect_label = "日付をつなげる";
key.transfer2_sort_area1_label = "階層1";
key.transfer2_sort_area2_label = "階層2";
key.transfer2_sort_area3_label = "階層3";
key.transfer2_folder_reset="すべてやり直し";

key.use_none = "(未設定)";
key.use_user = "担当者";
key.use_fax = "ファクス受信情報";
key.use_fax_g3id = "送信者G3IDで仕分ける";
key.use_date = "日付";

key.use_phone_number = "電話番号を利用";
key.use_g3id = "G3IDを利用";
key.use_dial_in = "ダイヤルイン番号を利用";
key.folder_img1_label ="(転送先名)登録場所";
key.folder_img2_label = "電話番号(自動)";
key.folder_img3_label = "G3ID";
key.folder_img4_label = "ﾀﾞｲﾔﾙｲﾝ番号";
key.folder_img5_label = "日付";
//key.folder_img5_label = "";
//key.folder_img6_label = "";
key.folder_img7_label = "受信文書";
key.folder_img8_label = "未分類";
key.folder_img9_label = "迷惑";
key.folder_img10_label = "担当者";
key.folder_img11_label = "年";
key.folder_img12_label = "月";
key.folder_img13_label = "日";



// 操作性点検指摘修正
key.transfer1_received_fax_settings_title = "受信文書設定";
key.transfer2_received_fax_settings_title = "受信文書設定";
key.received_fax_settings_title = "受信文書設定(共通)";
key.file_name = "ファイル名 ";
key.file_name_description = "受信日時は必ず選択してください";
key.received_date_and_time_label = "受信日時";
key.name_in_address_book_label = "宛先表登録名";
key.call_id_label = "発信者番号";
key.g3id_label = "G3ID";
key.serial_number_label = "シリアル番号";
key.costom_text_label = "任意文字列";
key.costom_text_title = "任意文字列";
key.date_and_time_format_label = "受信日時の形式";
key.date_and_time_format_1 = "YYYYMMDDHHMMSS";
key.date_and_time_format_2 = "YYYY-MM-DD-HH-MM-SS";
key.date_and_time_format_3 = "YYYY.MM.DD.HH.MM.SS";
key.date_and_time_format_4 = "YYYY_MM_DD_HH_MM_SS";
key.date_and_time_format_5 = "YYYYMMDDHHMM";
key.date_and_time_format_6 = "YYYY-MM-DD-HH-MM";
key.date_and_time_format_7 = "YYYY.MM.DD.HH.MM";
key.date_and_time_format_8 = "YYYY_MM_DD_HH_MM";
key.separator_label = "区切り文字";
key.separator_hyphen = "- (ハイフン)";
key.separator_underscore = "_(アンダーバー)";
key.separator_dot = ". (ドット)";
key.separator_none = "(なし)";
key.received_date_and_time_val = "<受信日時>";
key.name_in_address_book_val = "<宛先表登録名>";
key.call_id_val = "<発信者番号>";
key.g3id_val = "<G3ID>";
key.serial_number_val = "<シリアル番号>";

key.transfer1_file_format_label = "ファイル形式";
key.transfer2_file_format_label = "ファイル形式";
key.file_format_pdf = ".pdf";
key.file_format_pdf_ocr = ".pdf(OCR)";
key.file_format_xdw = ".xdw(DocuWorks)";
key.file_format_xdw_ocr = ".xdw(DocuWorks OCR)";
key.file_format_tiff = ".tiff";

key.transfer1_auto_upright_orientation_label = "自動正立する";
key.transfer2_auto_upright_orientation_label = "自動正立する";


key.schedule_title = "曜日ごとの例外時間帯";
key.schedule_description = "曜日ごとに例外動作する時間帯を指定できます。";
key.monday_label = "月";
key.tuesday_label = "火";
key.wednesday_label = "水";
key.thursday_label = "木";
key.friday_label = "金";
key.saturday_label = "土";
key.sunday_label = "日";
key.schdule_unset = "指定しない";
key.schdule_allday = "終日";
key.schdule_set_time = "時間指定";
key.schdule_non = "設定しない";
key.schdule_before = "以前";
key.schdule_after = "以後";
key.specified_period_setting_title = "日時指定による例外期間";
key.specified_period_setting_description = "曜日ごとの時間帯設定より優先して例外動作する期間を指定できます。";
key.specified_period_setting1_start_month_label = "月";
key.specified_period_setting1_start_day_label = "日";
key.specified_period_setting1_end_month_label = "月";
key.specified_period_setting1_end_day_label = "日";
key.specified_period_setting2_start_month_label = "月";
key.specified_period_setting2_start_day_label = "日";
key.specified_period_setting2_end_month_label = "月";
key.specified_period_setting2_end_day_label = "日";
key.specified_period_setting3_start_month_label = "月";
key.specified_period_setting3_start_day_label = "日";
key.specified_period_setting3_end_month_label = "月";
key.specified_period_setting3_end_day_label = "日";
key.specified_period_setting1_from_label = "～";
key.specified_period_setting2_from_label = "～";
key.specified_period_setting3_from_label = "～";
key.no_specified_day="例外動作として設定した期間が過ぎています。<br />[日時指定による例外期間]または[例外日指定]を再設定してください。";
key.specified_day_setting_title="例外日指定";
key.specified_day_setting_description="曜日ごとの時間帯設定より優先して例外動作する日を指定できます。";
key.specified_day_setting_add="追加→";
key.specified_day_setting_delete = "削除";

//初期値で使用
key.setting_title = "XXX 設定完了";
key.setting_msg = "XXX 設定が完了しました。";

error_code_01 = "設定可能なファクス回線がないため、この機能は使用できません。";

error_code_20 = "ペーパーレスファクス仕分けの設定に失敗しました。<br />PGS1110SGPsから本機能を表示しなおしてください。<br /><br />失敗が繰り返される場合は、機械管理者に連絡してください。";

// エクスポート画面
key.export_title ="ペーパーレスファクス仕分けの設定";
key.export_description = "ペーパーレスファクス仕分けの設定をエクスポートできます。<br />パスワードを入力してください。インポートする時に使用します。<br />";
key.export_submit = "エクスポート";
key.file_password_label = "パスワード";
key.jobhistory_title = "動作履歴のダウンロード";
key.jobhistory_description = "ペーパーレスファクス仕分けの動作履歴をダウンロードできます。";
key.download_submit = "ダウンロード";

key.export_user_title = "担当者の設定";
key.export_user_description = "担当者情報をエクスポートできます。";
key.export_user_submit = "エクスポート";

// インポート画面
key.import_title ="ペーパーレスファクス仕分けの設定";
//V2 属性付与
key.import_description = "ペーパーレスファクス仕分けの設定をインポートできます。<br />すでに設定された項目がある場合は、設定ファイルの内容に更新されます。";
key.import_description_confirm_attribute = "受信文書の[属性情報を付与する]の設定は、エクスポートデータに含まれません。<br />インポートした後、必要に応じて再設定してください。";
key.import_description_password = "エクスポートする時に設定したパスワードを入力してください。";
key.file_label = "設定ファイル";
key.file_password_label = "パスワード";
key.import_submit = "インポート";
key.import_warning_message = "更新待ちの設定があります。<br />変更されるまでインポート指示はできません。";

key.import_user_title = "担当者の設定";
key.import_user_description="担当者情報をインポートすると、担当者ごとに仕分けフォルダーを作成することができます。<br />すでに設定された項目がある場合は、設定ファイルの内容に更新されます。<br />(最大登録件数：5000件)";
key.import_user_label="設定ファイル";
key.import_user_submit = "インポート";

key.setting_close = "OK";
key.error_title = "エラー";
key.error_close = "OK";

// インポート
key.info_title = "確認";
key.info_close = "OK";
key.info_cancel = "キャンセル";

key.alert_delete_work_title = "確認";
key.alert_delete_doc_title = "確認";
key.do_delete_work = "はい";
key.do_delete_doc = "はい";
key.close_alert_delete_work = "いいえ";
key.close_alert_delete_doc = "いいえ";

key.setting_complete_title = "設定変更予約完了";
key.setting_complete_msg = "設定の変更を予約しました。<br /><br />ジョブ実行中や外部機器からの操作中などの場合、それらが完了してから変更が反映されます。<br />変更が反映されるまでは、変更前の設定で動作します。";

key.alert_title = "警告";
key.alert_close = "OK";

alert_code01 = "転送%sのWorking Folderの転送先URLの形式が間違っています。正しい転送先URLを入力してください。";
alert_code02 = "日時指定による例外期間の日付が間違っています。";
alert_code03 = "日時指定による例外期間で入力されていない項目があります。";
alert_code04 = "ペーパーレスファクス仕分けの設定に失敗しました。<br />時間をおいて再度実行してください。";
alert_code05 = "親展ボックス番号の最大値は%sです。";
alert_code06 = "親展ボックス番号が入力されていません。";
alert_code07 = "転送%sのFTPのユーザIDが入力されていません。";
alert_code08 = "転送%sのFTPのパスワードが入力されていません。";
alert_code09 = "転送%sのFTPのサーバー名/IPアドレスが入力されていません。";
alert_code10 = "転送%sのFTPの保存場所が入力されていません。";
alert_code11 = "転送%sのFTPのポート番号は1～65535までです。";
alert_code12 = "転送%sのSMBのユーザIDが入力されていません。";
alert_code13 = "転送%sのSMBのパスワードが入力されていません。";
alert_code14 = "転送%sのSMBのサーバー名/IPアドレスが入力されていません。";
alert_code15 = "転送%sのSMBの共有名が入力されていません。";
alert_code16 = "転送%sのSMBの保存場所が入力されていません。";
alert_code17 = "転送%sのSMBのポート番号は1～65535までです。";
alert_code18 = "転送%sのメールの宛先名が入力されていません。";
alert_code19 = "転送%sのメールのメールアドレスが入力されていません。";
alert_code20 = "通知先の宛先名が入力されていません。";
alert_code21 = "通知先のメールアドレスが入力されていません。";
alert_code22 = "仕分けできない場合の格納先が入力されていません。";
alert_code23 = "迷惑ファクス格納先（任意 ）が入力されていません。";
alert_code24 = "日時指定による例外期間の開始時刻を終了時刻が同じです。";
alert_code25 = "ボックスに関連付けられているジョブフローが、本機能の<br />[受信時の動作設定]で設定されている内容と一致していま<br />せん。<br /><br />本機能で設定を保存すると、現在ボックスに関連付けられ<br />ているジョブフローは解除され、[受信時の動作設定]の<br />内容が新たなジョブフローとして関連付けられます。";
alert_code26 = "ボックスの空き番号がありません。<br />開設済みのボックスを選択するか、削除してください。";
alert_code27 = "他の回線で使用されている親展ボックスです。<br />設定を保存すると他の回線の転送先も変更されます。";
alert_code28 = "仕様設定画面で回線%sの保存先に指定されている<br />ボックスが、本機能で設定されているボックスと一致<br />していません。<br /><br />本機能で設定を保存すると、仕様設定画面の設定にも<br />反映されます。";

alert_code29 = "設定可能なファクス回線がないため、この機能は使用できません。";
alert_code30 = "必要な情報の取得に失敗しました。<br />PGS1110SGPsから本機能を表示しなおしてください。";
alert_code31 = "機械内部または本機能で異常が発生しました。<br />機械管理者に連絡してください。";
alert_code32 = "ペーパーレスファクス仕分けの設定に失敗しました。<br />PGS1110SGPsから本機能を表示しなおしてください。<br /><br />失敗が繰り返される場合は、機械管理者に連絡してください。";
alert_code33 = "例外動作の設定情報が取得できませんでした。<br />例外動作は未設定の状態で起動します。<br /><br />設定情報の再取得を試みる場合は、PGS1110SGPsから本機能を表示しなおしてください。";
alert_code34 = "回線%sの設定情報が取得できませんでした。<br />回線%sは未設定の状態で起動します。<br />設定情報の再取得を試みる場合は、PGS1110SGPsから本機能を表示しなおしてください。";
alert_code35 = "設定の保存に失敗しました。<br />もう一度[新しい設定を適用]を押してください。<br /><br />失敗が繰り返される場合は、機械管理者に連絡してください。";

alert_code36 = "転送先にメールが設定されているときは、ファイル名に<宛先表登録名>は使用できません。<br /><br />ファイル名から<宛先表登録名>を削除しました。";
alert_code37 = "転送先がメールのみのときは、ファイル名に <宛先表登録名>は使用できません。<br /><br />ファイル名から<宛先表登録名>を削除しました。";

//  任意文字列文字チェック
alert_code38 = "ファイル名に使用できない文字が含まれていたため、<br />使用できない文字を削除しました。";
//  転送先が選択かつ転送先が未設定 （TODO 文字列は仮）
alert_code39 = "転送先%sが選択されていますが、転送先が未設定です。";
// フォルダ名文字列チェック
alert_code40 = "フォルダー名に使用できない文字が含まれていたため、<br />使用できない文字を削除しました。";

//SMB/FTPパスワード未設定確認ポップアップ表示メッセージ
alert_code41 = "転送1の転送先のパスワードが入力されていません。<br />パスワードを設定して運用している場合は、パスワードを入力してください。<br />パスワードを設定しない場合は、[OK]を押してください。";
alert_code42 = "転送2の転送先のパスワードが入力されていません。<br />パスワードを設定して運用している場合は、パスワードを入力してください。<br />パスワードを設定しない場合は、[OK]を押してください。";
alert_code43 = "転送1、転送2の転送先のパスワードが入力されていません。<br />パスワードを設定して運用している場合は、パスワードを入力してください。<br />パスワードを設定しない場合は、[OK]を押してください。";

//
alert_code44 = "転送%sのWorking FolderのユーザーIDが入力されていません。";
alert_code45 = "転送%sのWorking Folderのパスワードが入力されていません。";

//AR 252985
alert_code46 = "ボックス%sには、ジョブフローが関連付けられています。<br />設定を変更すると、ジョブフローが上書きされます。";

//インポートポップアップメッセージ
alert_code47 = "インポートできません。<br />パスワードを確認してください。";
alert_code48 = "インポートできません。<br />指定したファイルが設定ファイルではないか、<br />ファイルが壊れている可能性があります。";
alert_code49 = "指定した設定ファイルは、使用できません。<br />異なる国や地域の機械で作成されています。";
alert_code50 = "インポートできませんでした。<br />設定ファイルが壊れている可能性があります。";
alert_code51 = "ファクス受信文書の出力設定に、この機械で使用できない排出先が指定されています。<br />排出先の設定を[自動]に変更します。";
alert_code52 = "ファクス受信文書の転送設定に、この機械で使用できないファイル形式が指定されています。<br />ファイル形式をOCRなしの設定に変更します。";
alert_code53 = "ファクス受信文書の保存先として、すでに親展ボックスが設定されています。<br />設定ファイルで指定されている親展ボックスに変更します。";
alert_code54 = "ファクス受信文書の保存先に指定されている親展ボックス<%s>は、すでに指示書が関連付けられています。<br />設定ファイルで指定されている指示書に変更します。";
// 宛先表登録名をファイル名から削除する
alert_code80 = "転送先にメールが設定されているときは、ファイル名に<宛先表登録名>は使用できません。<br />ファイル名から<宛先表登録名>を削除しました。";

alert_code90="インポートできません。<br /> ファイルの内容を確認してください。<br /><br /> - 列数: 5列<br /> - 拡張子: CSV";
alert_code91="インポートできません。<br /> ファイルの電話番号の_hdt1行目を確認してください。";
alert_code92="インポートできません。<br /> ファイルのG3IDの_hdt1行目を確認してください。";
alert_code93="インポートできません。<br /> ファイルの担当者の_hdt1行目を確認してください。";

//エクスポートポップアップメッセージ
alert_code55 = "エクスポートできません。<br />ペーパーレスファクス仕分けの設定がありません。";
alert_code56 = "エクスポートできませんでした。<br />もう一度やり直してください。";

//動作履歴ポップアップメッセージ
alert_code57 = "動作履歴がないため、ダウンロードできません。";

//SMB接続確認ポップアップ
alert_code58 = "SMB通信機能が無効になっています。複合機の設定を確認してください。";
alert_code59 = "サーバーが見つかりません。";
alert_code60 = "パス名またはディレクトリ名の指定が正しくありません。";
alert_code61 = "ユーザー名が正しくありません。";
alert_code62 = "ユーザーがロックアウトされています。";
alert_code63 = "ユーザーが制限されています。空パスワードが許可されていません。";
alert_code64 = "ユーザーが無効になっています。";
alert_code65 = "ユーザーの有効期間が過ぎています。";
alert_code66 = "ユーザー数制限を越えています。";
alert_code67 = "パスワードが正しくありません。";
alert_code68 = "パスワードの変更が必要です。";
alert_code69 = "パスワードの有効期間が過ぎています。";
alert_code70 = "指定されたファイル名は使用できません。";
alert_code71 = "アクセス権が有りません。サーバーのアクセス権設定を確認してください。";
alert_code72 = "サーバーにログインできない時間帯です。";
alert_code73 = "ログイン可能なワークステーションが制限されています。";
alert_code74 = "格納先の空き領域がありません。";
alert_code75 = "通信エラーが発生しました。ネットワーク接続を確認してください。";
alert_code76 = "通信がタイムアウトしました。ネットワーク接続を確認してください。";
alert_code77 = "サーバー名のアドレス解決に失敗しました。";
alert_code78 = "SMB通信でエラーが発生しました。";
alert_code79 = "複合機のソフトウェアバージョンは、本機能に対応しておりません。<br />ソフトウェアをバージョンアップしてください。";

// 親展ボックス番号禁則メッセージ
alert_code81 = "親展ボックス番号は1～%sまでです。";

//SMB/FTPパスワード未設定確認ポップアップ
key.non_passwprd_title = "確認";
key.non_passwprd_ok = "OK";
key.non_passwprd_cancel = "パスワードを入力";

key.passwprd_setting_title = "機械管理者ID/パスワードの登録";
key.passwprd_setting_msg = "機械管理者ID/パスワードがアプリケーションに登録されていないか、登録されている情報が正しくありません。<br />正しい機械管理者ID/パスワードをアプリケーションに登録してください。";
key.passwprd_setting_id_label = "機械管理者ID";
key.passwprd_setting_password_label = "機械管理者パスワード";
key.passwprd_setting_ok = "決定";
key.passwprd_setting_cancel = "取り消し";

//KOパスワードに関する注意ポップアップ
key.alert_passwprd_setting_title = "機械管理者ID/パスワードに関する注意";
key.alert_passwprd_setting_msg = "仕様設定画面で機械管理者IDまたはパスワードを変更した場合、必ず[ペーパーレスファクス仕分け]に登録した機械管理者IDまたはパスワードも変更してください。";
key.alert_passwprd_setting_ok = "確認";

//SMB接続確認成功ポップアップ
key.send_file_test_msg = "<br />現在入力されている設定でアップロードしました。正しくアップロードされたことを確認して、[新しい設定を適用]ボタンを押して設定を保存してください。<br />";
key.send_file_test_ok = "閉じる";


key.line1_default_JobFlowName = "回線1の転送先";
key.line2_default_JobFlowName = "回線2の転送先";
key.line3_default_JobFlowName = "回線3の転送先";
key.exception_default_JobFlowName = "例外動作の転送先";

//ヒントメッセージ
//ボックス設定
key.box_auto_deleate_infotip_msg_label = "[動作設定]で指示した[転送]や[プリント]が実行されると、自動的にボックスから受信文書が削除されます。";
key.box_auto_run_infotip_msg_label = "ファクス受信したときに[動作設定]で指示した処理が自動実行されます。";

//転送1
key.transfer1_smb_userID_infotip_msg_label = "共有フォルダーの書き込み権限を持つユーザー名を入力します。<br />ドメインユーザーの場合は、[ユーザー名@ドメイン名]の形式で入力してください。";
key.transfer1_smb_server_address_infotip_msg_label = "受信文書を保存するSMBサーバーのフルコンピューター名またはIPアドレスを入力します。<br /><br />フルコンピューター名の例：<br />　host1.example.com<br />IP アドレスの例：<br />　192.0.2.1（IPv4 の場合）<br />　2001:DB8::1234（IPv6 の場合）";
key.transfer1_smb_share_name_infotip_msg_label = "SMBサーバーに作成した共有フォルダーの共有名を入力します。<br />転送された文書はここに保存されます。";
key.transfer1_smb_transfer_place_infotip_msg_label = "共有フォルダーのサブフォルダーとして保存したい場合に指定します。";
key.transfer1_smb_port_number_infotip_msg_label = "SMBサーバーのポート番号を変更している場合は、［変更する］を選択して変更したポート番号を入力してください。";
key.transfer1_smb_connection_infotip_msg_label = "設定内容が有効か確認するために、空ファイルを送信します。<br />共有名または保存場所に[smbtest.tmp]ファイルが保存されていることを確認してください。";

key.transfer1_ftp_userID_infotip_msg_label = "FTPディレクトリの書き込み権限を持つユーザー名を入力します。";
key.transfer1_ftp_server_address_infotip_msg_label = "受信文書を保存するFTPディレクトリのフルコンピューター名またはIPアドレスを入力します。<br /><br />フルコンピューター名の例：<br />　host1.example.com<br />IP アドレスの例：<br />　192.0.2.1（IPv4 の場合）<br />　2001:DB8::1234（IPv6 の場合）<br />";
key.transfer1_ftp_transfer_place_infotip_msg_label = "FTPディレクトリのサブフォルダーとして保存したい場合に指定します。";
key.transfer1_ftp_port_number_infotip_msg_label = "FTPディレクトリのポート番号を変更している場合は、［変更する］を選択して変更したポート番号を入力してください。";
//key.transfer1_ftp_connection_infotip_msg_label = "設定内容が有効か確認するために、空ファイルを送信します。<br />共有名または保存場所にｘｘｘｘｘファイルが保存されていることを確認してください。";

key.transfer1_wf_userID_infotip_msg_label = "Working Folderにログインできるメールアドレスを入力します。";
key.transfer1_wf_address_infotip_msg_label = "受信文書を保存する転送先フォルダーのURLを入力します。<br />ブラウザーでWorking Folderのフォルダーにアクセスして、URLをコピーしてください。";

// 
key.transfer1_received_fax_info_infotip_msg_label = "受信した文書をファクス受信情報ごとにフォルダーに仕分けて保存します。[電話番号を利用]の場合はナンバーディスプレイ契約が必要です。";
key.transfer1_received_fax_info_infotip_msg_label_ibg = "受信した文書を送信者G3IDごとにフォルダーに仕分けて保存します。";
key.transfer1_no_destination_folder_infotip_msg_label = "仕分け先のフォルダーがなかった場合、ファクス受信情報ごとのフォルダーに受信文書が保存されます。";
key.transfer1_storage_location_folder_infotip_msg_label = "仕分けできない受信文書が保存されるフォルダーの名前を設定します。";
key.transfer1_spam_fax_folder_infotip_msg_label = "迷惑ファクスとして分類したい受信文書を保存します。すでに受信した文書をフォルダーごと移動すると、以降は迷惑ファクスとして仕分けられます。<br />";
key.transfer1_sort_by_date_infotip_msg_label = "日付ごとのフォルダーに受信文書が保存されます。";

//転送2
key.transfer2_smb_userID_infotip_msg_label = "共有フォルダーの書き込み権限を持つユーザー名を入力します。<br />ドメインユーザーの場合は、[ユーザー名@ドメイン名]の形式で入力してください。";
key.transfer2_smb_server_address_infotip_msg_label = "受信文書を保存するSMBサーバーのフルコンピューター名またはIPアドレスを入力します。<br /><br />フルコンピューター名の例：<br />　host1.example.com<br />IP アドレスの例：<br />　192.0.2.1（IPv4 の場合）<br />　2001:DB8::1234（IPv6 の場合）";
key.transfer2_smb_share_name_infotip_msg_label = "SMBサーバーに作成した共有フォルダーの共有名を入力します。<br />転送された文書はここに保存されます。";
key.transfer2_smb_transfer_place_infotip_msg_label = "共有フォルダーのサブフォルダーとして保存したい場合に指定します。";
key.transfer2_smb_port_number_infotip_msg_label = "SMBサーバーのポート番号を変更している場合は、［変更する］を選択して変更したポート番号を入力してください。";
key.transfer2_smb_connection_infotip_msg_label = "設定内容が有効か確認するために、空ファイルを送信します。<br />共有名または保存場所に[smbtest.tmp]ファイルが保存されていることを確認してください。";

key.transfer2_ftp_userID_infotip_msg_label = "FTPディレクトリの書き込み権限を持つユーザー名を入力します。";
key.transfer2_ftp_server_address_infotip_msg_label = "受信文書を保存するFTPディレクトリのフルコンピューター名またはIPアドレスを入力します。<br /><br />フルコンピューター名の例：<br />　host1.example.com<br />IP アドレスの例：<br />　192.0.2.1（IPv4 の場合）<br />　2001:DB8::1234（IPv6 の場合）<br />";
key.transfer2_ftp_transfer_place_infotip_msg_label = "FTPディレクトリのサブフォルダーとして保存したい場合に指定します。";
key.transfer2_ftp_port_number_infotip_msg_label = "FTPディレクトリのポート番号を変更している場合は、［変更する］を選択して変更したポート番号を入力してください。";
//key.transfer2_ftp_connection_infotip_msg_label = "設定内容が有効か確認するために、空ファイルを送信します。<br />共有名または保存場所にｘｘｘｘｘファイルが保存されていることを確認してください。";

key.transfer2_wf_userID_infotip_msg_label = "Working Folderにログインできるメールアドレスを入力します。";
key.transfer2_wf_address_infotip_msg_label = "受信文書を保存する転送先フォルダーのURLを入力します。<br />ブラウザーでWorking Folderのフォルダーにアクセスして、URLをコピーしてください。";

//
key.transfer2_received_fax_info_infotip_msg_label = "受信した文書をファクス受信情報ごとにフォルダーに仕分けて保存します。[電話番号を利用]の場合はナンバーディスプレイ契約が必要です。";
key.transfer2_received_fax_info_infotip_msg_label_ibg = "受信した文書を送信者G3IDごとにフォルダーに仕分けて保存します。";
key.transfer2_no_destination_folder_infotip_msg_label = "仕分け先のフォルダーがなかった場合、ファクス受信情報ごとのフォルダーに受信文書が保存されます。";
key.transfer2_storage_location_folder_infotip_msg_label = "仕分けできない受信文書が保存されるフォルダーの名前を設定します。";
key.transfer2_spam_fax_folder_infotip_msg_label = "迷惑ファクスとして分類したい受信文書を保存します。すでに受信した文書をフォルダーごと移動すると、以降は迷惑ファクスとして仕分けられます。<br />";
key.transfer2_sort_by_date_infotip_msg_label = "日付ごとのフォルダーに受信文書が保存されます。";


//指示書の状態
key.action_mode_nomal ="通常動作中(%s)";
key.action_mode_exception = "例外動作中(%s)";
key.action_mode_noset = "有効な設定がありません";

key.action_mode_year = "年";
key.action_mode_dateOrder ="";
key.action_mode_month = "月";
key.action_mode_date = "日";
key.action_mode_hours = ":";
key.action_mode_point_in_time = "時点";

key.param_getting = "設定情報を取得中...";
key.param_setting = "設定情報を更新中...";
key.date_and_time_format_9 = "MMDDYYYYHHMMSS";
key.date_and_time_format_10 = "MM-DD-YYYY-HH-MM-SS";
key.date_and_time_format_11 = "MM.DD.YYYY.HH.MM.SS";
key.date_and_time_format_12 = "MM_DD_YYYY_HH_MM_SS";
key.date_and_time_format_13 = "MMDDYYYYHHMM";
key.date_and_time_format_14 = "MM-DD-YYYY-HH-MM";
key.date_and_time_format_15 = "MM.DD.YYYY.HH.MM";
key.date_and_time_format_16 = "MM_DD_YYYY_HH_MM";

key.date_and_time_format_17 = "DDMMYYYYHHMMSS";
key.date_and_time_format_18 = "DD-MM-YYYY-HH-MM-SS";
key.date_and_time_format_19 = "DD.MM.YYYY.HH.MM.SS";
key.date_and_time_format_20 = "DD_MM_YYYY_HH_MM_SS";
key.date_and_time_format_21 = "DDMMYYYYHHMM";
key.date_and_time_format_22 = "DD-MM-YYYY-HH-MM";
key.date_and_time_format_23 = "DD.MM.YYYY.HH.MM";
key.date_and_time_format_24 = "DD_MM_YYYY_HH_MM";


//V2 属性付与
key.append_attr_label = "DocuWorks文書/PDF文書に属性情報を付与する";
key.default_attr_label = "属性情報を取得した項目のみ付与する";
key.append_attr_infotip_msg_label ="転送先がメール以外で、かつファイル形式にPDFまたはDocuWorksが設定されているとき、以下の属性情報を自動的に付与します。<br /><br />　- 受信日時<br />　- 相手局名<br />　- 相手局ID<br />　- 発信者番号<br />　- ダイヤルイン情報<br />　- 処理フラグ（[未処理]に固定）<br />　- 宛先帳登録名<br /><br />※設定は、すべての回線の転送先設定に共通です。";
key.append_attr_infotip_msg_label_ibg ="転送先がメール以外で、かつファイル形式にPDFまたはDocuWorksが設定されているとき、以下の属性情報を自動的に付与します。<br /><br />　- 受信日時<br />　- 相手局名<br />　- 相手局ID<br />　- 処理フラグ（[未処理]に固定）<br />　- 宛先帳登録名<br /><br />※設定は、すべての回線の転送先設定に共通です。";
key.confirm_attribute_title = "確認";
key.confirm_attribute_msg = "受信文書の[属性情報を付与する]の設定は、エクスポートデータに含まれません。<br />インポートするとき、必要に応じて再設定してください。";
key.confirm_attribute_close = "閉じる";

//V2 Ver判定対応_インポートメッセージ
alert_code82 = "指定した設定ファイルは、使用できません。<br />この設定ファイルを使用するには、プラグインのバージョンを<br />更新してください。";

// ボックス名称のMAX文字数の変更
alert_code83 = "インポートしたファイルで設定されている[ボックス名]が、この機種で使用できる文字数(全角10文字/半角20文字)を超えています。<br />使用できる文字数を超えた文字列を削除して設定します。";
key.specified_period_setting_description_detail="例外日を削除する場合は、チェックボックスではなく、リストを選択してください。";
key.specified_area_action ="[例外時の動作]";
key.specified_area_action_transfer1="転送先1: _hdt1";
key.specified_area_action_transfer2="転送先2: _hdt1";
key.specified_area_action_print="プリント: _hdt1";
key.specified_area_action_notify="完了通知: _hdt1";
key.specified_area_action_transfer1_unset="転送先1: (未設定)";
key.specified_area_action_transfer2_unset="転送先2: (未設定)";
key.specified_area_action_print_unset="プリント: (未設定)";
key.specified_area_action_notify_unset="完了通知: (未設定)";
key.specified_area_day ="[曜日ごとの例外時間帯]";
key.specified_area_day1 ="月: _hdt1-_hdt2";
key.specified_area_day2 ="月: (未設定)";
key.specified_area_day3 ="火: _hdt1-_hdt2";
key.specified_area_day4 ="火: (未設定)";
key.specified_area_day5 ="水: _hdt1-_hdt2";
key.specified_area_day6 ="水: (未設定)";
key.specified_area_day7 ="木: _hdt1-_hdt2";
key.specified_area_day8 ="木: (未設定)";
key.specified_area_day9 ="金: _hdt1-_hdt2";
key.specified_area_day10 ="金: (未設定)";
key.specified_area_day11 ="土: _hdt1-_hdt2";
key.specified_area_day12 ="土: (未設定)";
key.specified_area_day13 ="日: _hdt1-_hdt2";
key.specified_area_day14 ="日: (未設定)";
key.specified_area_day15 ="、_hdt1-_hdt2";
key.specified_area_period ="[日時指定による例外期間]";
key.specified_area_period_time ="期間_hdt1: _hdt2年_hdt3月_hdt4日 _hdt5 - _hdt6年_hdt7月_hdt8日 _hdt9";
key.specified_area_period_unset ="期間_hdt1: (未設定)";
key.specified_area_date ="[例外日指定]";
key.specified_area_date_set ="_hdt1年_hdt2月_hdt3日";
key.specified_area_date_unset ="(未設定)";

key.transfer1_pdf_security_label="PDFセキュリティ";
key.transfer1_pdf_open_password_label="文書を開くパスワード";
key.transfer2_pdf_security_label="PDFセキュリティ";
key.transfer2_pdf_open_password_label="文書を開くパスワード";
key.pdf_no_set_security="設定しない";
key.pdf_set_security="設定する";
key.pdf_no_set_open_password="設定しない";
key.pdf_set_open_password="設定する";
key.transfer1_pdf_password_label="パスワード";
key.transfer1_pdf_confirm_open_password_label="パスワードの再入力";
key.transfer2_pdf_password_label="パスワード";
key.transfer2_pdf_confirm_open_password_label="パスワードの再入力";
key.transfer1_pdf_security_permission_label="文書の印刷および編集を制限";
key.transfer2_pdf_security_permission_label="文書の印刷および編集を制限";
key.pdf_security_permission_non="しない";
key.pdf_security_permission_do="する";
key.transfer1_pdf_security_permission_password_label="権限パスワード";
key.transfer1_pdf_confirm_security_permission_password_label="パスワードの再入力";
key.transfer1_pdf_print_permission_label="印刷を許可";
key.transfer2_pdf_security_permission_password_label="権限パスワード";
key.transfer2_pdf_confirm_security_permission_password_label="パスワードの再入力";
key.transfer2_pdf_print_permission_label="印刷を許可";
key.pdf_print_permission_non="許可しない";
key.pdf_print_permission_low_resolution="低解像度(150dpi)";
key.pdf_print_permission_high_resolution="高解像度";
key.transfer1_pdf_change_permission_label="変更を許可";
key.transfer2_pdf_change_permission_label="変更を許可";
key.pdf_change_permission_non="許可しない";
key.pdf_change_permission_page="ページの挿入、回転、削除";
key.pdf_change_permission_form="フォームフィールドの入力と署名";
key.pdf_change_permission_all="注釈作成、ﾌｫｰﾑﾌｨｰﾙﾄﾞ入力と既存の署名ﾌｨｰﾙﾄﾞに署名";
key.pdf_change_permission_except_page="ページの抽出を除く全ての操作";
key.transfer1_pdf_copy_permission_label="テキスト、画像、その他の内容のコピーを有効にする";
key.transfer1_pdf_access_permission_label="スクリーンリーダーデバイスのテキストアクセスを有効にする";
key.transfer1_pdf_encryption_label="暗号化アルゴリズム";
key.transfer2_pdf_copy_permission_label="テキスト、画像、その他の内容のコピーを有効にする";
key.transfer2_pdf_access_permission_label="スクリーンリーダーデバイスのテキストアクセスを有効にする";
key.transfer2_pdf_encryption_label="暗号化アルゴリズム";
key.pdf_encryption_128="128bit AES";
key.pdf_encryption_256="256bit AES";
key.transfer1_pdf_compatibility_label="互換性のあるバージョン";
key.transfer2_pdf_compatibility_label="互換性のあるバージョン";
key.pdf_compatibility_128="Acrobat 7.0およびそれ以降";
key.pdf_compatibility_256="Acrobat Xおよびそれ以降";
key.transfer1_dw_security_label="DocuWorksセキュリティ";
key.transfer1_dw_password_label="パスワード";
key.transfer2_dw_security_label="DocuWorksセキュリティ";
key.transfer2_dw_password_label="パスワード";
key.dw_set_security="設定する";
key.dw_no_set_security="設定しない";
key.dw_password_non="設定しない";
key.dw_password_v8="設定する(V8以降)";
key.dw_password_v5="設定する(V5以降)";
key.transfer1_dw_encryption_label="暗号化アルゴリズム";
key.transfer2_dw_encryption_label="暗号化アルゴリズム";
key.dw_encryption_128="128bit AES";
key.dw_encryption_256="256bit AES";
key.transfer1_dw_open_password_label="開くパスワード";
key.transfer2_dw_open_password_label="開くパスワード";
key.dw_no_set_open_password="設定しない";
key.dw_set_open_password="設定する";
key.transfer1_dw_op_password_label="パスワード";
key.transfer1_dw_confirm_open_password_label="パスワードの再入力";
key.transfer1_dw_security_password_label="フルアクセスパスワード";
key.transfer2_dw_op_password_label="パスワード";
key.transfer2_dw_confirm_open_password_label="パスワードの再入力";
key.transfer2_dw_security_password_label="フルアクセスパスワード";
key.dw_no_set_security_password="設定しない";
key.dw_set_security_password="設定する";
key.transfer1_dw_s_password_label="パスワード";
key.transfer1_dw_confirm_security_password_label="パスワードの再入力";
key.transfer1_dw_file_edit_permission_label="文書の編集を禁止";
key.transfer2_dw_s_password_label="パスワード";
key.transfer2_dw_confirm_security_password_label="パスワードの再入力";
key.transfer2_dw_file_edit_permission_label="文書の編集を禁止";
key.dw_file_edit_permission_non="しない";
key.dw_file_edit_permission_do="する";
key.transfer1_dw_annotation_edit_permission_label="アノテーションの編集を禁止";
key.transfer2_dw_annotation_edit_permission_label="アノテーションの編集を禁止";
key.dw_annotation_edit_permission_non="しない";
key.dw_annotation_edit_permission_do="する";
key.transfer1_dw_print_permission_label="印刷禁止";
key.transfer2_dw_print_permission_label="印刷禁止";
key.dw_print_permission_non="しない";
key.dw_print_permission_do="する";
key.transfer1_dw_copy_permission_label="転記禁止";
key.transfer2_dw_copy_permission_label="転記禁止";
key.dw_copy_permission_non="しない";
key.dw_copy_permission_do="する";
alert_code84="転送%s: [ファイル形式]の[PDFセキュリティ]で、[文書を開くパスワード]または[権限パスワード]を設定してください。";
alert_code85="転送%s: [ファイル形式]の[DocuWorksセキュリティ]で、[開くパスワード]または[フルアクセスパスワード]を設定するか、ファイル操作のいずれかの項目を禁止にしてください。";
alert_code86="次の機能はこの機械では使用できません。<br />設定値はすべて削除されます。<br /><br />PDFセキュリティ, DocuWorksセキュリティ";
alert_code87="PDFセキュリティの設定をリセットします。よろしいですか？<br /><br />出力ファイル形式の設定をPDF以外に設定すると、[PDFセキュリティ]の設定はすべてリセットされます。";
alert_code88="DocuWorksセキュリティの設定をリセットします。よろしいですか？<br /><br />出力ファイル形式の設定をDocuWorks以外に設定すると、[DocuWorksセキュリティ]の設定はすべてリセットされます。";
key.notice_delete_security_info_title ="確認";
key.notice_delete_security_info_close="閉じる";
key.transfer1_reset_security_info_title ="確認";
key.transfer1_reset_security_info_ok="OK";
key.transfer1_reset_security_info_cancel="キャンセル";
key.transfer2_reset_security_info_title ="確認";
key.transfer2_reset_security_info_ok="OK";
key.transfer2_reset_security_info_cancel="キャンセル";
key.transfer1_ftp_send_again_label="送信失敗時の再送信";
key.transfer1_ftp_send_times_label="再送信回数";
key.transfer1_ftp_send_interval_label="再送信間隔";
key.transfer1_smb_send_again_label="送信失敗時の再送信";
key.transfer1_smb_send_times_label="再送信回数";
key.transfer1_smb_send_interval_label="再送信間隔";
key.transfer1_wf_send_again_label="送信失敗時の再送信";
key.transfer1_wf_send_times_label="再送信回数";
key.transfer1_wf_send_interval_label="再送信間隔";
key.transfer1_mail_send_again_label="送信失敗時の再送信";
key.transfer1_mail_send_times_label="再送信回数";
key.transfer1_mail_send_interval_label="再送信間隔";
key.transfer2_ftp_send_again_label="送信失敗時の再送信";
key.transfer2_ftp_send_times_label="再送信回数";
key.transfer2_ftp_send_interval_label="再送信間隔";
key.transfer2_smb_send_again_label="送信失敗時の再送信";
key.transfer2_smb_send_times_label="再送信回数";
key.transfer2_smb_send_interval_label="再送信間隔";
key.transfer2_wf_send_again_label="送信失敗時の再送信";
key.transfer2_wf_send_times_label="再送信回数";
key.transfer2_wf_send_interval_label="再送信間隔";
key.transfer2_mail_send_again_label="送信失敗時の再送信";
key.transfer2_mail_send_times_label="再送信回数";
key.transfer2_mail_send_interval_label="再送信間隔";
key.send_times_op="_hdt1回";
key.send_interval_op="_hdt1秒";
alert_code89="転送%sの[文書を開くパスワード]が一致していません。<br />　もう一度入力しなおしてください。";
alert_code95="転送%sの[文書を開くパスワード]を入力してください。";
alert_code96="転送%sの[権限パスワード]を入力してください。";
alert_code97="転送%sの[開くパスワード]を入力してください。";
alert_code98="転送%sの[フルアクセスパスワード]を入力してください。";
alert_code99="新しい設定を適用できません。転送%sの[文書を開くパスワード]に使用できない文字が含まれています。<br />半角英数字記号で入力してください。";
alert_code100="新しい設定を適用できません。転送%sの[権限パスワード]に使用できない文字が含まれています。<br />半角英数字記号で入力してください。";
alert_code101="新しい設定を適用できません。転送%sの[開くパスワード]に使用できない文字が含まれています。<br />半角英数字記号で入力してください。";
alert_code102="新しい設定を適用できません。転送%sの[フルアクセスパスワード]に使用できない文字が含まれています。<br />半角英数字記号で入力してください。";
alert_code103="転送%sの[権限パスワード]が一致していません。<br />　もう一度入力しなおしてください。";
alert_code104="転送%sの[開くパスワード]が一致していません。<br />　もう一度入力しなおしてください。";
alert_code105="転送%sの[フルアクセスパスワード]が一致していません。<br />　もう一度入力しなおしてください。";
alert_code106="転送%sの[文書を開くパスワード]と[権限パスワード]は<br />　異なるパスワードを設定してください。";
alert_code107="PDFセキュリティの設定をリセットします。よろしいですか？<br />[転送先]の設定が[メール]の場合、[PDFセキュリティ]は使用できません。";
alert_code108="DocuWorksセキュリティの設定をリセットします。よろしいですか？<br />[転送先]の設定が[メール]の場合、[DocuWorksセキュリティ]は使用できません。";
});
