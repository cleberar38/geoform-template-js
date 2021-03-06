﻿define(
     ({
        map: {
            error: "맵을 생성할 수 없음"
        },
        onlineStatus: {
            offline: "현재 오프라인 상태에서 작업 중입니다. 서버에 대한 연결이 생성될 때까지는 양식 제출이 로컬에 저장됩니다.",
            reconnecting: "다시 연결 중&hellip;",
            pending: "네트워크 연결이 재연결되면 보류 중인 편집 ${total}개가 제출됩니다."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "내 기관",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "내 콘텐츠",
                    favoritesLabel: "내 즐겨찾기"
                },
                title: "웹 맵 선택",
                searchTitle: "검색",
                ok: "확인",
                cancel: "취소",
                placeholder: "검색어 입력"
            },
            groupdlg: {
                items: {
                    organizationLabel: "내 기관",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "내 콘텐츠",
                    favoritesLabel: "내 즐겨찾기"
                },
                title: "그룹 선택",
                searchTitle: "검색",
                ok: "확인",
                cancel: "취소",
                placeholder: "검색어 입력"
            },
            sharedlg: {
                items: {
                },
                mailtoLinkDescription: "GeoForm에 대한 링크입니다."
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "노씽(Northing)",
            utm_easting: "이스팅(Easting)",
            utm_zone_number: "영역(Zone) 번호",
            geoFormGeneralTabText: "1. 정보 입력",
            locationInformationText: "2. 위치 선택",
            submitInformationText: "3. 양식 완료",
            submitInstructions: "이 정보를 맵에 추가합니다.",
            myLocationText: "현재 위치",
            locationDescriptionForMoreThanOneOption: "맵을 클릭/탭하거나 다음 옵션 중 하나를 사용하여 이 항목의 위치를 지정하세요.",
            locationDescriptionForOneOption: "맵을 클릭/누르기하거나 다음 옵션을 사용하여 이 항목의 위치를 지정합니다.",
            locationDescriptionForNoOption: "맵을 클릭/누르기하여 이 항목의 위치를 지정합니다.",
            addressText: "검색",
            geographic: "위도/경도",
            locationTabText: "위치",
            locationPopupTitle: "위치",
            submitButtonText: "항목 제출",
            submitButtonTextLoading: "제출 중&hellip;",
            formValidationMessageAlertText: "다음 필드가 필요합니다.",
            selectLocation: "제출할 위치를 선택하세요.",
            emptylatitudeAlertMessage: "${openLink}위도${closeLink} 좌표를 입력하세요.",
            emptylongitudeAlertMessage: "${openLink}경도${closeLink} 좌표를 입력하세요.",
            shareUserTitleMessage: "참여해주셔서 감사합니다!",
            entrySubmitted: "항목이 맵에 제출되었습니다.",
            shareThisForm: "양식 공유",
            shareUserTextMessage: "다음 옵션을 사용하여 기여하도록 다른 사용자에게 알리세요.",
            addAttachmentFailedMessage: "첨부 파일을 레이어에 추가할 수 없음",
            addFeatureFailedMessage: "피처를 레이어에 추가할 수 없음",
            noLayerConfiguredMessage: "편집 가능한 피처 레이어를 불러오거나 찾는 동안 오류가 발생했습니다. 양식을 표시하거나 제출 수집을 시작하려면 편집 가능한 피처 레이어를 웹 맵에 추가합니다.",
            placeholderLatitude: "위도(Y)",
            placeholderLongitude: "경도(X)",
            latitude: "위도",
            longitude: "경도",
            findMyLocation: "내 위치 찾기",
            finding: "위치 지정 중&hellip;",
            backToTop: "맨 위로 가기",
            addressSearchText: "제출 내역이 여기에 표시됩니다. 핀을 끌어서 위치를 수정할 수 있습니다.",
            shareModalFormText: "양식 링크",
            close: "닫기",
            locationNotFound: "위치를 찾을 수 없습니다.",
            setLocation: "위치 설정",
            find: "주소 또는 위치 찾기",
            attachment: "첨부",
            toggleDropdown: "드롭다운 전환",
            invalidString: "올바른 값을 입력하세요.",
            invalidSmallNumber: "-32768~32767 범위의 올바른 ${openStrong}정수${closeStrong} 값을 입력하세요.",
            invalidNumber: "-21474830648~2147483647 범위의 올바른 ${openStrong}정수${closeStrong} 값을 입력하세요.",
            invalidFloat: "올바른 ${openStrong}부동 소수점${closeStrong} 값을 입력하세요.",
            invalidDouble: "올바른 ${openStrong}더블(double)${closeStrong} 값을 입력하세요.",
            invalidLatLong: "올바른 위도 및 경도 좌표를 입력하세요.",
            invalidUTM: "올바른 UTM 좌표를 입력하세요.",
            invalidUSNG: "올바른 USNG 좌표를 입력하세요.",
            invalidMGRS: "올바른 MGRS 좌표를 입력하세요.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "선택&hellip;",
            applyEditsFailedMessage: "죄송합니다. 항목을 제출할 수 없습니다. 다시 시도하세요.",
            requiredFields: "일부 오류가 있습니다. 아래와 같이 오류를 수정하세요.",
            requiredField: "(필수)",
            error: "오류",
            textRangeHintMessage: "${openStrong}힌트:${closeStrong} 최소 값 ${minValue} 및 최대 값 ${maxValue}",
            dateRangeHintMessage: "${openStrong}힌트:${closeStrong} 최소 날짜 ${minValue} 및 최대 날짜 ${maxValue}",
            remainingCharactersHintMessage: "${value} 문자가 남음"
        },
        builder: {
            invalidUser: "죄송합니다. 이 항목을 볼 수 있는 권한이 없습니다.",
            invalidWebmapSelectionAlert: "선택한 웹 맵에는 사용할 수 있는 유효한 레이어가 포함되어 있지 않습니다. 계속하려면 편집 가능한 피처 레이어를 웹 맵에 추가하세요.",
            invalidWebmapSelectionAlert2: "자세한 내용은 ${openLink}피처 서비스란?${closeLink}을 참조하세요.",
            selectFieldsText: "양식 필드 선택",
            selectThemeText: "양식 테마 선택",
            webmapText: "웹 맵",
            layerText: "레이어",
            detailsText: "세부정보",
            fieldsText: "필드",
            styleText: "스타일",
            optionText: "옵션",
            previewText: "섬네일",
            publishText: "발행",
            optionsApplicationText: "옵션",
            titleText: "빌더",
            descriptionText: "GeoForm은 ${link1}피처 서비스${closeLink}의 양식 기반 데이터 편집에 사용되는 구성 가능한 템플릿입니다. 이 응용프로그램을 통해 사용자는 맵 팝업 대신 양식을 통해 데이터를 입력하는 한편 ${link2}웹 맵${closeLink} 및 편집 가능한 피처 서비스 기능을 활용할 수 있습니다. GeoForm을 사용자 정의하고 보급하려면 다음 단계를 따릅니다.",
            btnPreviousText: "이전",
            btnNextText: "다음",
            webmapTabTitleText: "웹 맵 선택",
            viewWebmap: "웹 맵 보기",
            webmapDetailsText: "선택된 웹 맵은 ${webMapTitleLink}${webMapTitle}${closeLink}입니다. 다른 웹 맵을 선택하려면 '웹 맵 선택' 버튼을 클릭합니다.",
            btnSelectWebmapText: "웹 맵 선택",
            btnSelectWebmapTextLoading: "불러오는 중&hellip;",
            layerTabTitleText: "편집 가능한 레이어 선택",
            selectLayerLabelText: "레이어",
            selectLayerDefaultOptionText: "레이어 선택",
            detailsTabTitleText: "양식 세부정보",
            detailTitleLabelText: "제목",
            detailLogoLabelText: "로고 이미지",
            descriptionLabelText: "양식 지침 및 세부 정보",
            fieldDescriptionLabelText: "도움말 텍스트(옵션)",
            fieldTabFieldHeaderText: "필드",
            fieldTabLabelHeaderText: "레이블",
            fieldTabDisplayTypeHeaderText: "표시 형식",
            fieldTabOrderColumnText: "순서",
            fieldTabVisibleColumnText: "활성화",
            selectMenuOption: "메뉴 선택",
            selectRadioOption: "라디오 버튼",
            selectTextOption: "텍스트",
            selectDateOption: "Date Picker",
            selectRangeOption: "터치-회전자",
            selectCheckboxOption: "체크박스",
            selectMailOption: "이메일",
            selectUrlOption: "URL",
            selectTextAreaOption: "텍스트 영역",
            previewApplicationText: "응용프로그램 미리보기",
            saveApplicationText: "응용프로그램 저장",
            saveText: "저장",
            toggleNavigationText: "탐색 전환",
            formPlaceholderText: "내 양식",
            shareBuilderInProgressTitleMessage: "GeoForm 발행",
            shareBuilderProgressBarMessage: "잠시 기다려 주세요.&hellip;",
            shareBuilderTitleMessage: "성공, 항목 저장됨",
            shareBuilderTextMessage: "다른 사용자와 공유하여 정보 수집을 시작할 수 있습니다.",
            shareModalFormText: "양식 링크",
            shareBuilderSuccess: "GeoForm이 업데이트 및 발행되었습니다!",
            geoformTitleText: "GeoForm",
            layerTabText: "이 레이어로부터 GeoForm이 구축됩니다. 이 레이어는 대상 그룹에 적합한 공유 권한으로 편집할 수 있도록 설정된 피처 서비스여야 합니다.",
            detailsTabText: "아래의 양식 세부 정보 상자를 사용하여 제목을 사용자 지정하고, 사용자 정의 로고를 추가하고, GeoForm 대상 그룹을 위한 간단한 설명을 제공합니다. 설명에서 다른 리소스와 연락처 정보는 물론 GeoForm을 통해 수집된 모든 데이터를 제공하는 웹 매핑 응용프로그램에 대상 그룹을 연결하는 링크를 추가할 수 있습니다.",
            fieldsTabText: "여기서 GeoForm 대상 그룹에게 표시될 필드를 선택하고, 대상 그룹에게 표시될 레이블을 편집하고, 데이터 입력에 도움이 되는 간단한 설명을 추가할 수 있습니다.",
            styleTabText: "기본 설정을 기반으로 아래의 테마를 사용하여 GeoForm의 스타일을 지정합니다.",
            publishTabText: "GeoForm의 사용자 정의를 완료했다면 응용프로그램을 저장하고 잠재고객과의 공유를 시작하세요. 언제든지 이 빌더로 되돌아와 피드백에 따라 사용자 정의를 계속할 수 있습니다.",
            headerSizeLabel:"머리글 크기",
            smallHeader: "작은 머리글 사용",
            bigHeader: "대형 머리글 사용",
            pushpinText: "고정 핀",
            doneButtonText: "저장 후 종료",
            fieldTabPlaceHolderHeaderText: "힌트(옵션)",
            enableAttachmentLabelText: "${openStrong}첨부 파일 활성화${closeStrong}",
            enableAttachmentLabelHint: "여기에서 첨부 파일을 활성화/비활성화할 수 있음",
            attachmentIsRequiredLabelText: "${openStrong}첨부 요구${closeStrong}",
            attachmentIsRequiredLabelHint: "필요에 따라, 사용자에게 첨부 파일을 입력하도록 요구합니다.",
            attachmentLabelText: "첨부 버튼 레이블",
            attachmentLabelHint: "첨부 버튼 옆에 표시되는 텍스트입니다. 이 레이블을 사용하여, 첨부해야 할 항목(사진, 비디오, 문서 등), 요청할 형식(.jpeg, .png, .docx, .pdf 등) 및 추가 지침을 사용자에게 알릴 수 있습니다.",
            attachmentDescription: "첨부 설명",
            attachmentHint: "필요한 경우 여기에 추가적인 첨부 관련 지침을 입력할 수 있습니다.",
            jumbotronDescription: "양식에 대해 대형 또는 소형 머리글을 사용합니다. 대형 머리글을 사용하면 응용프로그램의 목적을 더욱 잘 나타낼 수 있지만 화면에서 더 많은 공간을 차지하게 됩니다.",
            shareGeoformText: "Geoform 공유",
            shareDescription: "공유 패널을 통해, 대상 그룹은 제출을 완료한 다른 공동 작업자와 GeoForm을 쉽게 공유할 수 있습니다. 공유 패널은 언제든지 비활성화할 수 있습니다.",
            defaultMapExtent: "기본 맵 범위",
            defaultMapExtentDescription: "맵은 제출 후 웹 맵에서 기본 범위로 재설정되며, 언제든지 비활성화할 수 있습니다.",
            pushpinOptionsDescription: "다양한 색상 중에서 맵 고정 핀 색상을 선택할 수 있습니다. 이는 사용자가 제출물을 맵에 배치하는 데 도움이 되는 맵 심볼과는 달라야 합니다.",
            selectLocationText: "위치 선택 기준",
            myLocationText: "내 위치",
            searchText: "검색",
            coordinatesText: "위도 및 경도 좌표",
            usng: "USNG 좌표",
            mgrs: "MGRS 좌표",
            utm: "UTM 좌표",
            selectLocationSDescription: "사용자가 이러한 방법을 사용하여 위치를 선택하도록 허용합니다.",
            dragTooltipText:"원하는 위치로 필드를 드래그하기",
            showHideLayerText:"레이어 표시/숨김",
            showHideLayerHelpText:"레이어를 표시하거나 숨기도록 GeoForm을 구성할 수 있습니다."
        }
    })
);