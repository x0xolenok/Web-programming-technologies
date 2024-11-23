<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                exclude-result-prefixes="msxsl">
    <xsl:include href="XSLTMain.xslt"/>

    <xsl:template match="/">
        <xsl:call-template name="main"/>
        <link href="StyleSheetCompany.css" rel="stylesheet">
        </link>
        <div id="content">
            Контакты компании:
            <xsl:value-of select=".//@name"/>
            <div class="border"/>
            Адрес:
            <xsl:value-of select=".//adress"/>
            <br/>
            Телефон:
            <xsl:value-of select=".//telefon"/>
            <br/>
            Электронная почта:
            <xsl:value-of select=".//mail"/>
        </div>
    </xsl:template>
</xsl:stylesheet>
