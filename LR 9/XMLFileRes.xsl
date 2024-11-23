<?xml version="1.0" encoding="utf-8" ?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="student" mode="first">
    <tr>
        <td>
            <xsl:value-of select = "@fam"/>
        </td>
        <td>
            <xsl:value-of select = "@name"/>
        </td>
        <td>
            <xsl:value-of select = "@sname"/>
        </td>
    </tr>
</xsl:template>

<xsl:template match="student" mode="second">
    <xsl:if test=".//predmet/@value = '2'">
        <tr>
            <td>
                <xsl:value-of select = "@fam"/>
            </td>
            <td>
                <xsl:value-of select = "@name"/>
            </td>
            <td>
                <xsl:value-of select = "@sname"/>
            </td>
        </tr>
    </xsl:if>
</xsl:template>

<xsl:template match="/">
    <html>
        <body>

            <h2>Список студентов сдавших информатику</h2>
            <table border="1">
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
                <xsl:apply-templates select=".//student[.//predmet[@name= 'Информатика' and @value !=0]]"  mode="first" >
                </xsl:apply-templates>
            </table>

            <h2>Список студентов имеющих двойки по какому либо предмету</h2>
            <table border="1">
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
                <xsl:apply-templates select=".//student" mode="second">
                </xsl:apply-templates>
            </table>

            <h2>Список студентов имеющих все пятерки</h2>
            <table border="1">
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
                <xsl:for-each select="//student">
                    <xsl:if test="not(.//predmet/@value != '5')">
                        <tr>
                            <td>
                                <xsl:value-of select = "@fam"/>
                            </td>
                            <td>
                                <xsl:value-of select = "@name"/>
                            </td>
                            <td>
                                <xsl:value-of select = "@sname"/>
                            </td>
                        </tr>
                    </xsl:if>
                </xsl:for-each>
            </table>

            <h2>Список студентов со средним баллом</h2>
            <table border="1">
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Средний бал</th>
                </tr>
                <xsl:for-each select="//student">
                    <tr>
                        <td>
                            <xsl:value-of select = "@fam"/>
                        </td>
                        <td>
                            <xsl:value-of select = "@name"/>
                        </td>
                        <td>
                            <xsl:value-of select = "@sname"/>
                        </td>

                        <xsl:choose>
                            <xsl:when test="sum(.//predmet/@value) div 4.0 > 4">
                                <td>
                                    <b><xsl:value-of select="sum(.//predmet/@value) div 4.0"/></b>
                                </td>
                            </xsl:when>

                            <xsl:when test="sum(.//predmet/@value) div 4.0 &lt; 3">
                                <td>
                                    <i><xsl:value-of select="sum(.//predmet/@value) div 4.0"/></i>
                                </td>
                            </xsl:when>

                            <xsl:otherwise>
                                <td>
                                    <xsl:value-of select="sum(.//predmet/@value) div 4.0"/>
                                </td>
                            </xsl:otherwise>

                        </xsl:choose>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>
