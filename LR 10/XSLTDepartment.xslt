<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                exclude-result-prefixes="msxsl">
    <xsl:include href="XSLTMain.xslt"/>

    <xsl:template match="/">
        <xsl:call-template name="main"/>
        <link href="StyleSheetDepartment.css" rel="stylesheet">
        </link>
        <div id="content">
            Список сотрудников отдела:
            <xsl:value-of select=".//@name"/>
            <xsl:for-each select=".//s">
                <br/>
                <xsl:value-of select=".//@name"/>&#160;<xsl:value-of select=".//@fam"/>
            </xsl:for-each>
        </div>
    </xsl:template>
</xsl:stylesheet>
